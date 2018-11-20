import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import { media } from '../../styles/Style';

const Container = styled.header`
    margin-top: 50px;
    padding: 0 10% 0 75px;

    ${media.desktop`
        padding: 0 10%;
    `}
`;

class Header extends React.Component {
    render() {
        return (
            <Container>
                <Text selector={'P'} mb={'10px'} light uppercase primary>— {this.props.caption}</Text>
                <Text selector={'H2'} mb={'10px'} bold capitalize black>{this.props.title}</Text>
                <Text selector={'P'} light primary>{this.props.description}</Text>
            </Container>
        )
    }
}

export default Header;