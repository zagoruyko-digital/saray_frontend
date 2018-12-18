import React from 'react';
import { Link } from 'react-router-dom';

import { API } from '../../../services/API';

import Action from '../../elems/Action';
import Text from '../../elems/Text';
import { Filters, Grid, Card, Card__Image } from './style';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            category1: false,
            category2: false,
            category3: false,
            category4: false,
            category5: false
        };

        this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        const url = 'http://' + API.production + API.v0 + 'categoryq/';

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

    handleFilterChange(event) {
        this.setState({
            [event.target.name]: !this.state[event.target.name]
        });
    }

    render() {
        return (
            <>
                <Filters>
                    {
                        this.state.category1 ?
                            <Action selector={'Button'} name={'category1'} secondary onClick={this.handleFilterChange}>Импульсный свет</Action>
                        :
                            <Action selector={'Button'} name={'category1'} secondaryOutline onClick={this.handleFilterChange}>Импульсный свет</Action>
                    }
                    {
                        this.state.category2 ?
                            <Action selector={'Button'} name={'category2'} secondary onClick={this.handleFilterChange}>Постоянный свет</Action>
                        :
                            <Action selector={'Button'} name={'category2'} secondaryOutline onClick={this.handleFilterChange}>Постоянный свет</Action>
                    }
                    {
                        this.state.category3 ?
                            <Action selector={'Button'} name={'category3'} secondary onClick={this.handleFilterChange}>Светоотражатели</Action>
                        :
                            <Action selector={'Button'} name={'category3'} secondaryOutline onClick={this.handleFilterChange}>Светоотражатели</Action>
                    }
                    {
                        this.state.category4 ?
                            <Action selector={'Button'} name={'category4'} secondary onClick={this.handleFilterChange}>Объективы</Action>
                        :
                            <Action selector={'Button'} name={'category4'} secondaryOutline onClick={this.handleFilterChange}>Объективы</Action>
                    }
                    {
                        this.state.category5 ?
                            <Action selector={'Button'} name={'category5'} secondary onClick={this.handleFilterChange}>Аксессуары</Action>
                        :
                            <Action selector={'Button'} name={'category5'} secondaryOutline onClick={this.handleFilterChange}>Аксессуары</Action>
                    }
                </Filters>
                <Grid>
                    {
                        this.state.data.map((item) =>
                            <Card>
                                <div>
                                    <Text selector={'H3'} mb={'10px'} bold black>{item.title}</Text>
                                    <Text selector={'P'} mb={'10px'} light primary>{item.description}</Text>
                                </div>
                                <Card__Image>
                                    <div style={{backgroundImage: 'url(' + item.cover + ')'}} />
                                </Card__Image>
                                <div>
                                    <Action selector={'Button'}>Подробнее</Action>
                                </div>
                            </Card>
                        )
                    }
                </Grid>
            </>
        )
    }
}