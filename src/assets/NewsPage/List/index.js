import React from 'react';
import { Link } from 'react-router-dom';

import { API } from '../../../services/API';

import Text from '../../elems/Text';
import { Grid, Card } from './style';

export default class List extends React.Component {
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
            <Grid>
                {
                    this.state.data.map((news) =>
                        <Link to={'/news/' + news.id} key={news.id}>
                            <Card style={{backgroundImage: 'url(' + news.cover + ')'}}>
                                <Text selector={'H3'} mb={'10px'} extrabold white>{news.manager.user.first_name + ' ' + news.manager.user.last_name}</Text>
                                <Text selector={'H2'} extrabold white>{news.title}</Text>
                            </Card>
                        </Link>
                    )
                }
            </Grid>
        )
    }
}