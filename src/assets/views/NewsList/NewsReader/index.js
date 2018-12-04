import React from 'react';

import { API } from '../../../../services/API';

import Drawer from '../../../elements/Drawer';
import Text from '../../../selectors/Text';
import { Container, Cover, Content } from './style';

export default class NewsReader extends React.Component {
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

        const url = 'http://' + API.production + API.v0 + 'news/' + this.props.match.params.id + '/';

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
                <Drawer />

                <Cover style={{backgroundImage: 'url(' + this.state.data.cover + ')'}}>
                    <Text selector={'H3'} mb={'10px'} extrabold white>Виктор Загоруйко</Text>
                    <Text selector={'H2'} extrabold white>{this.state.data.title}</Text>
                </Cover>
                <Content>
                    <Text selector={'H3'} mb={'10px'} extrabold black>Виктор Загоруйко</Text>
                    <Text selector={'H2'} mb={'20px'} extrabold black>{this.state.data.title}</Text>
                    <Text selector={'P'} light black>{this.state.data.body}</Text>
                </Content>
            </Container>
        )
    }
}