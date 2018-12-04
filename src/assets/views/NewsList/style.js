import styled from 'styled-components';

import { media } from '../../../styles/Style';

export const Container = styled.div`
    margin-top: 30px;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr;

    ${media.landscape`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.desktop`
        padding-left: 10%;
        padding-right: 10%;

        grid-template-columns: repeat(5, 1fr);
    `}
`;

export const Card = styled.div`
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
    max-width: 90vw;
    height: 400px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    cursor: pointer;

    & h2 {
        font-size: 3rem;
        line-height: 35px;
    }

    & h3 {
        font-size: 1.5rem;
    }

    ${media.desktop`
        & h2 {
            font-size: 4rem;
            line-height: 45px;
        }

        & h3 {
            font-size: 2rem;
        }
    `}
`;