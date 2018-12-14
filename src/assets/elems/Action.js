import React from 'react';
import styled, { css } from 'styled-components';

import Theme from '../../styles/Style';

const base = css`
    min-width: 64px;
    height: 32px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: .9rem;
    font-weight: 500;
    text-transform: uppercase;

    border-radius: 3px;

    cursor: pointer;

    ${props => props.mb     ?   'margin-bottom: ' + props.mb + ';' : ''}
    ${props => props.mt     ?   'margin-top: ' + props.mt + ';' : ''}
    ${props => props.icon   ?   'padding-left: 12px; padding-right: 16px;' : 'padding-left: 16px; padding-right: 16px;'}
    
    ${
        props =>
        props.primary               ?   'color: ' + Theme.white + ';' + 'background-color: ' + Theme.primary + ';' :
        props.secondary             ?   'color: ' + Theme.white + ';' + 'background-color: ' + Theme.secondary + ';' :
        props.primaryOutline       ?   'color: ' + Theme.primary + ';' + 'background-color: ' + Theme.white + '; border: 1px solid ' + Theme.primary + ';' :
        props.secondaryOutline     ?   'color: ' + Theme.secondary + ';' + 'background-color: ' + Theme.white + '; border: 1px solid ' + Theme.secondary + ';' :
        'color: ' + Theme.primary + ';' + 'background-color: transparent; border: 0;'
    }

    & svg {
        margin-right: 8px;

        font-size: 1rem;
    }
`;

const Button = styled.button`
    ${base}
`;

const Input = styled.input`
    ${base}
`;

const A = styled.a`
    ${base}
`;

export default function Action(props) {
    return (
        props.selector == 'Button'  ?   <Button {...props}>{props.children}</Button> :
        props.selector == 'Input'   ?   <Input {...props}>{props.children}</Input> :
        props.selector == 'A'       ?   <A {...props}>{props.children}</A> :
        null
    )
}