import styled from 'styled-components';

import Theme from '../../styles/Style';

import ResizableSection from '../elems/ResizableSection';

export const Section = styled(ResizableSection)`
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`;

export const SignInForm = styled.form`
    padding: 30px 20px;
    max-width: 95vw;
    width: 500px;
    height: 350px;

    display: grid;
    grid-template-rows: 20% 40% 20% 20%;

    border-radius: 3px;

    background-color: ${Theme.white};
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, .2);

    & div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const OptionsGroup = styled.div`
    position: relative;

    justify-content: space-between !important;

    & svg {
        position: absolute;
        left: 6px;

        ${props => props.active ? 'opacity: 1;' : 'opacity: 0;'}

        color: ${Theme.secondary};

        transition: opacity .3s linear;
    }
`;

export const OptionsGroup__Checkbox = styled.input`
    margin-right: 5px;
    width: 20px;
    height: 20px;

    border: 1px solid hsl(220, 12%, 75%);
    border-radius: 3px;
`;

export const InputGroup = styled.div`
    flex-direction: column;

    & input {
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 10px;
        width: 100%;
        height: 46px;

        font-size: .9rem;
        font-weight: 300;

        border: 2px hsl(220, 12%, 95%) solid;
        border-radius: 3px;
        box-shadow: inset 0 2px 4px 0 hsla(0, 0%, 0%, .08);
    }
`;