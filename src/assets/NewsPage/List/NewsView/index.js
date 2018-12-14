import React from 'react';

import { API } from '../../../../services/API';

import Text from '../../../elems/Text';
import Nav from '../../../elems/Nav';
import { Container, Container__Cover, Container__Content } from './style';

export default class NewsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            news: []
        };
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        const url = 'http://' + API.production + API.v0 + 'news/' + this.props.match.params.id + '/';

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
                news: response
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
            <Container>
                <Nav goBack />
                <Container__Cover style={{backgroundImage: 'url(' + this.state.news.cover + ')'}}>
                    <Text selector={'H3'} mb={'10px'} extrabold white>Имя Фамилия</Text>
                    <Text selector={'H2'} extrabold white>{this.state.news.title}</Text>
                </Container__Cover>
                <Container__Content>
                    <Text selector={'H3'} mb={'10px'} extrabold black>Имя Фамилия</Text>
                    <Text selector={'H2'} mb={'30px'} extrabold black>{this.state.news.title}</Text>
                    <Text selector={'P'} light black>{this.state.news.body}</Text>
                </Container__Content>
            </Container>
        )
    }
}