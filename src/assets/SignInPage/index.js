import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

import { API } from '../../services/API';

import Text from '../elems/Text';
import Action from '../elems/Action';
import Nav from '../elems/Nav';
import { Section, SignInForm, InputGroup, OptionsGroup, OptionsGroup__Checkbox } from './style';

export default class SignInPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            email: '',
            password: '',
            remember: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCheckbox(event) {
        this.setState({remember: !this.state.remember});
    }

    handleSubmit(event) {
        alert(this.state.password);   
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        const url = 'http://' + API.production + API.v0 + 'news/';

        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            this.setState({
                loading: false,
                data: response
            });
        })
        .catch(error => {
            //TODO
            //Implement Snackbar for Errors
            alert(error);
        })
    }
    render() {
        return (
            <Section style={{backgroundImage: 'url(' + 'https://images.pexels.com/photos/6718/mountains-clouds-forest-trees.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' + ')'}}>
                <Nav />

                <SignInForm onSubmit={this.handleSubmit}>
                    <div><Text selector={'H3'} bold black>Войти в личный кабинет</Text></div>
                    <InputGroup>
                        <input required type={'email'} name={'email'} value={this.state.email} onChange={this.handleChange} placeholder={'Электронная почта'} />
                        <input required type={'password'} name={'password'} value={this.state.password} onChange={this.handleChange} placeholder={'Пароль'} />
                    </InputGroup>
                    <OptionsGroup active={this.state.remember}>
                        <div>
                            <div onClick={this.handleCheckbox}>
                                <OptionsGroup__Checkbox type={'checkbox'} value={this.state.remember} />
                                <FaCheck />
                            </div>
                            <Text selector={'P'} regular primary>Запомнить меня</Text>
                        </div>
                        <Link to={'/'}>
                            <Text selector={'P'} regular secondary>Забыли пароль?</Text>
                        </Link>
                    </OptionsGroup>
                    <div><Action selector={'Button'} secondary>Продолжить</Action></div>
                </SignInForm>
            </Section>
        )
    }
}