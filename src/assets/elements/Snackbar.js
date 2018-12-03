import React from 'react';
import styled from 'styled-components';

import Text from '../selectors/Text';
import Theme from '../../styles/Style';

const Container = styled.div`
    position: absolute;
    z-index: 120;
    bottom: 16px;
    left: 266px;
    
    padding: 0 16px;
    width: 344px;
    height: 48px;

    display: flex;
    flex-direction: row;
    align-items: center;

    border-radius: 3px;

    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: ${Theme.black};
    opacity: 0;

    animation-name: SlideIn;
    animation-duration: 3s;
    animation-iteration-count: 1;

    @keyframes SlideIn {
        0% { opacity: 0; }
        15%, 85% { opacity: 1; }
        100% { opacity: 0; }
    }
`;

function Snackbar(props) {
    return (
        <Container>
            <Text selector={'P'} light white>{props.text}</Text>
        </Container>
    )
}

export default Snackbar;