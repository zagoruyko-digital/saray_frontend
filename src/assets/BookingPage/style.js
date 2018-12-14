import styled from 'styled-components';

import Theme, { media } from '../../styles/Style';

export const Section = styled.section`
    position: relative;
    overflow: hidden;

    padding: 50px 5%;
    min-height: 100vh;
`;

export const StudioGrid = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const StudioGrid__Item = styled.div`
    position: relative;
    overflow: hidden;

    padding-left: 40px;
    padding-right: 40px;
    ${props => props.selected ? 'width: 100%;' : 'width: 10%;'}
    height: 900px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    transition: width .3s linear;

    &:hover {
        width: 100%;
    }

    &:hover div {
        opacity: 1;
    }

    & div {
        ${props => props.selected ? 'opacity: 1;' : 'opacity: 0;'}
    }

    ${media.landscape`
        
    `}

    ${media.desktop`
        
    `}
`;

export const StudioGrid__Title = styled.div`
    position: absolute;
    overflow: hidden;

    opacity: 0;

    transition: opacity .6s linear;

    ${media.landscape`
        
    `}

    ${media.desktop`
        
    `}
`;

export const BookingTypeGrid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr;

    ${media.landscape`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${media.desktop`
        grid-gap: 30px;
        grid-template-columns: repeat(4, 1fr);
    `}
`;

export const BookingTypeCard = styled.div`
    height: 700px;

    display: grid;
    grid-template-rows: 25% 20% 40% 15%;

    border-top: 10px ${Theme.primary} solid;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const BookingTypeCard__Head = styled.div`
    padding-left: 10%;
    padding-right: 10%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    ${media.landscape`
        
    `}

    ${media.desktop`
        
    `}
`;

export const BookingTypeCard__Cost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: ${Theme.primary_};

    & div span:nth-child(1) {
        color: ${Theme.primary};
        font-size: 3.25rem;
        font-weight: 400;
    }

    & div span:nth-child(2) {
        color: ${Theme.primary};
        font-size: 1.25rem;
        font-weight: 400;
    }

    ${media.landscape`
        
    `}

    ${media.desktop`
        
    `}
`;

export const BookingTypeCard__About = styled.div`
    padding-left: 10%;
    padding-right: 10%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    ${media.landscape`
        
    `}

    ${media.desktop`
        
    `}
`;

export const BookingTypeCard__Action = styled.div`
    padding-left: 10%;
    padding-right: 10%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.landscape`
        
    `}

    ${media.desktop`
        
    `}
`;