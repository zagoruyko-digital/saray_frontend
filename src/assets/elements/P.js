import React from 'react';
import styled from 'styled-components';

import Theme from '../../styles/Theme';

const Text = styled.p`
    font-size: 1rem;
    font-weight: 200;

    ${props => props.mb ? 'margin-bottom: ' + props.mb + ';' : ''}
    ${props => props.mt ? 'margin-top: ' + props.mt + ';' : ''}
    
    ${props => props.pl ? 'padding-left: ' + props.pl + ';' : ''}
    ${props => props.pr ? 'padding-right: ' + props.pr + ';' : ''}
    
    ${
        props =>
        props.center        ?   'text-align: center;' :
        props.left          ?   'text-align: left;' :
        props.right         ?   'text-align: right;' :
        ''
    }
    
    ${
        props =>
        props.uppercase     ?   'text-transform: uppercase;' :
        props.lowercase     ?   'text-transform: lowercase;' :
        props.capitalize    ?   'text-transform: capitalize;' :
        ''
    }

    ${props => props.tall ? 'line-height: 1.75rem;' : ''}
    
    ${
        props =>
        props.black         ?   'color: ' + Theme.black + ';' :
        props.white         ?   'color: ' + Theme.white + ';' :
        props.primary       ?   'color: ' + Theme.primary + ';' :
        props.secondary     ?   'color: ' + Theme.secondary + ';' :
        ''
    }
`;

function P(props) {
    return <Text {...props}>{props.children}</Text>
}

export default P;