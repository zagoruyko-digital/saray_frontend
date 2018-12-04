import React from 'react';
import { Link } from 'react-router-dom';

import { API } from '../../../services/API';

import Text from '../../selectors/Text';
import { Container, Card } from './style';

export default class NewsList extends React.Component {
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
                        <Link to={'/news/' + item.id} key={item.id}>
                            <Card key={item.id} style={{backgroundImage: 'url(' + item.cover + ')'}}>
                                <Text selector={'H3'} mb={'10px'} extrabold white>{item.manager.user.first_name + ' ' + item.manager.user.last_name}</Text>
                                <Text selector={'H2'} extrabold white>{item.title}</Text>
                            </Card>
                        </Link>
                    )
                }
            </Container>
        )
    }
}