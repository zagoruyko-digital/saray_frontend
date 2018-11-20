import React from 'react';
import Cookies from 'js-cookie'
import styled from 'styled-components';

import { API, isAuthenticated, getAccessToken, getRefreshToken } from '../../services/API';

import Nav from '../elements/Nav';
import H3 from '../elements/H3';
import Button from '../elements/Button';
import Theme from '../../styles/Style';

const Section = styled.section`
    position: relative;
    overflow: hidden;

    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-position: center center;
    background-repeat: none;
    background-image: url('https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg');
`;

const Form = styled.form`
    padding: 50px 20px;
    width: 350px;
    max-width: 90vw;

    display: grid;
    grid-template-rows: 40% 20% 20% 20%;
    grid-gap: 20px;

    background-color: ${Theme.white};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    border-radius: 5px;

    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;
    }

    & div span {
        width: 100%;
        height: 42px;
    }
`;

const Form__Input = styled.input`
    padding-left: 10px;
    width: 100%;
    height: 42px;

    box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, .08);
    border-radius: 5px;
    border: 0;
`;

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        isAuthenticated() ? this.props.history.push('/') : null
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        const url = 'http://' + API.development + '/login/';

        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
        .then(res => res.json())
        .then(res => {
            const tokens = res.token;
            
            const expires = (tokens.expires_in || 60 * 60) * 1000
            const inOneHour = new Date(new Date().getTime() + expires)

            Cookies.set('access_token', tokens, { expires: inOneHour })
            Cookies.set('refresh_token', tokens)

            this.props.history.push('/');
        })
        .catch(error => {
            alert(error)
        })
        
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Nav />
                <Section>
                    <Form>
                        <div>
                            <H3 mb={'10px'} black>
                                Войти или зарегистрироваться
                            </H3>
                        </div>
                        <div>
                            <Form__Input
                                required
                                type='text'
                                name='username'
                                value={this.state.username}
                                onChange={this.handleChange}
                                placeholder={'Имя пользователя'}
                            />
                        </div>
                        <div>
                            <Form__Input
                                required
                                type='text'
                                name='password'
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder={'Пароль'}
                            />
                        </div>
                        <div>
                            <Button secondary onClick={this.handleSubmit}>
                                Войти или зарегистрироваться
                            </Button>
                        </div>
                    </Form>
                </Section>
            </div>
        )
    }
}

export default Login;