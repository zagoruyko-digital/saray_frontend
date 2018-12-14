import styled from 'styled-components';

import ResizableSection from '../../../elems/ResizableSection';
import { media } from '../../../../styles/Style';

export const Container = styled(ResizableSection)`
    position: relative;
    overflow: hidden;

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: repeat(2, 1fr);

    ${media.landscape`
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
    `}

    ${media.desktop`
        grid-template-columns: 3fr 2fr;
    `}
`;

export const Container__Cover = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    ${media.landscape`
        order: 2;
    `}

    ${media.desktop`
        & h2 {
            display: none;
        }

        & h3 {
            display: none;
        }
    `}
`;

export const Container__Content = styled.aside`
    overflow: scroll;

    padding-left: 5%;
    padding-right: 5%;

    & h2 {
        display: none;
    }

    & h3 {
        display: none;
    }

    & p {
        line-height: 18px;
    }

    ${media.landscape`
        order: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        & h2 {
            
        }

        & h3 {
            
        }
    `}

    ${media.desktop`
        padding-left: 25%;
        padding-right: 25%;

        & h2 {
            display: inherit;
        }

        & h3 {
            display: inherit;
        }

        & p {
            line-height: 26px;
        }
    `}
`;