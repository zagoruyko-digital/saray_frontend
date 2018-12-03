import React from 'react';
import styled from 'styled-components';

import { API } from '../../services/API';
import { media } from '../../styles/Style';

import Section from '../elements/Section';
import Drawer from '../elements/Drawer';
import Text from '../elements/Text';

const Container = styled(Section)`
    height: 100vh;

    display: grid;

    grid-template-rows: 2fr 3fr;

    ${media.desktop`
        grid-template-columns: 3fr 2fr;
        grid-template-rows: 1fr;
    `}
`;

const Content = styled.div`
    overflow-y: scroll;

    padding: 10px 3%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    order: 1;

    & p {
        line-height: 22px;
    }

    ${media.desktop`
        padding: 0 30%;
        order: 2;
    `}
`;

const Cover = styled.div`
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

class NewsReader extends React.Component {
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
            console.log(this.state.data.manager.user.first_name);
        })
        .catch(error => {
            alert(error)
        })
    }

    render() {
        return (
            <Container>
                <Drawer />
                <Content>
                    <Text selector={'H3'} mt={'30vh'} mb={'10px'} light capitalize primary>Виктор Загоруйко</Text>
                    <Text selector={'H1'} mb={'10px'} bold capitalize black>{this.state.data.title}</Text>
                    <Text selector={'P'} mb={'10px'} light black>{this.state.data.body}</Text>
                </Content>
                <Cover style={{backgroundImage: 'url(' + this.state.data.cover + ')'}} />
            </Container>
        )
    }
}

export default NewsReader;