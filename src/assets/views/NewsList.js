import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { API } from '../../services/API';

import H3 from '../elements/H3';
import P from '../elements/P';

const Container = styled.div`
    margin-top: 30px;

    display: grid;
    grid-gap: 5px;

    grid-template-columns: 1fr 1fr 1fr;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:nth-child(even) div div:first-child {
        max-width: 80vw;
        width: 400px;
        height: 300px;
    }

    &:nth-child(odd) div div:first-child {
        max-width: 80vw;
        width: 400px;
        height: 600px;
    }

    @media (max-width: 575.98px) {
        margin-bottom: 45px;
    }
`;

const Card__Cover = styled.div`
    background-size: cover;
    background-position: center center;
    background-repeat: none;
`;

const Card__Footer = styled.div`
    & h3 {
        font-weight: 500;
    }

    & p {
        font-size: .9rem;
    }
`;

class NewsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: []
        };
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
        .then(res => res.json())
        .then(res => {
            this.setState({
                loading: false,
                data: res
            });
        })
        .catch(error => {
            alert(error)
        })
    }

    render() {
        return (
            <Container>
                {
                    this.state.data.map((item) =>
                        <Card>
                            <div>
                                <Card__Cover style={{backgroundImage: 'url(' + item.cover + ')'}} />
                                <Card__Footer>
                                    <H3 mt={'15px'} capitalize black>{item.title}</H3>
                                    <P mt={'5px'} uppercase primary>{item.manager.user.first_name + ' ' + item.manager.user.last_name}</P>
                                </Card__Footer>
                            </div>
                        </Card>
                    )
                }
            </Container>
        )
    }
}

export default NewsList;