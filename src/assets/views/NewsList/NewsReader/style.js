import styled from 'styled-components';

import { media } from '../../../../styles/Style';

export const Container = styled.div`
    position: relative;
    overflow: hidden;

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 2fr 3fr;

    ${media.landscape`
        grid-template-columns: 3fr 2fr;
        grid-template-rows: 1fr;
    `}

    ${media.desktop`
        grid-template-columns: 3fr 2fr;
        grid-template-rows: 1fr;
    `}
`;

export const Cover = styled.div`
    padding-left: 40px;
    padding-right: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    & h2 {
        font-size: 3rem;
        line-height: 35px;
    }

    & h3 {
        font-size: 1.5rem;
    }

    ${media.landscape`
        order: 2;

        & h2 {
            display: none;
        }

        & h3 {
            display: none;
        }
    `}

    ${media.desktop`
        order: 2;

        & h2 {
            display: none;
        }

        & h3 {
            display: none;
        }
    `}
`;

export const Content = styled.div`
    overflow: scroll;

    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;

    & h2 {
        display: none;
    }

    & h3 {
        display: none;
    }

    & p {
        font-size: .9rem;
        line-height: 26px;
    }

    ${media.landscape`
        position: relative;

        padding-left: 10%;
        padding-right: 10%;

        display: flex;
        order: 1;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        & h2 {
            display: inherit;

            font-size: 3rem;
            line-height: 35px;
        }

        & h3 {
            display: inherit;

            font-size: 1.5rem;
        }
    `}

    ${media.desktop`
        position: relative;

        padding-left: 30%;
        padding-right: 30%;

        display: flex;
        order: 1;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        & h2 {
            display: inherit;

            font-size: 4rem;
            line-height: 45px;
        }

        & h3 {
            display: inherit;

            font-size: 2rem;
        }

        & p {
            font-size: 1rem;
            line-height: 26px;
        }
    `}
`;