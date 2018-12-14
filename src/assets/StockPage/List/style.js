import styled from 'styled-components';

import { media } from '../../../styles/Style';

export const Filters = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-items: flex-start;

    & button {
        margin-right: 8px;
        margin-bottom: 8px;
    }
`;

export const Grid = styled.div`
    margin-top: 30px;

    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr;

    ${media.landscape`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.desktop`
        grid-template-columns: repeat(5, 1fr);
    `}
`;

export const Card = styled.div`
    margin: 0 auto;
    padding: 16px;
    max-width: 90vw;
    width: 100%;
    height: 150px;

    display: grid;
    grid-row-gap: 8px;
    grid-column-gap: 16px;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 1fr;

    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    & button {
        padding-left: 0;
        padding-right: 16px;
        margin-right: 8px;
    }

    ${media.landscape`
        
    `}

    ${media.desktop`
        
    `}
`;

export const Card__Image = styled.div`
    display: flex;
    justify-content: flex-end;

    & div {
        overflow: hidden;

        width: 80px;
        height: 80px;

        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;

        border-radius: 3px;
    }

    ${media.landscape`
        
    `}

    ${media.desktop`
        
    `}
`;