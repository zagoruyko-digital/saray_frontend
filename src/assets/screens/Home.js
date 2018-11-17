import React from 'react';
import styled from 'styled-components';

import Nav from '../elements/Nav';
import Theme from '../../styles/Theme';

const Section = styled.section`
    position: relative;
    overflow: hidden;

    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const BackgroundVideo = styled.video`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    margin: auto;
    width: 650px;
    max-width: 100vw;
`;

class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Section>
                    <BackgroundVideo loop autoPlay playsInline muted src={'http://provocateur-eda.ru/static/video.mp4'} />
                    <svg width={'100%'} height={'100%'} viewBox={'0 0 325 140'} preserveAspectRatio="xMidYMid slice">
                        <defs>
                            <mask id={'overlay'}>
                                <rect width={'100%'} height={'100%'} fill={Theme.white} />
                                <text x={'50%'} y={'50%'} fontSize={'20px'} fontWeight={'700'} textAnchor={'middle'}>SARAY</text>
                                <text x={'50%'} y={'56%'} fontSize={'9px'} fontWeight={'200'} textAnchor={'middle'}>PHOTO STUDIO</text>
                            </mask>
                        </defs>
                        <rect width={'100%'} height={'100%'} fill={Theme.white} mask={'url(#overlay)'} />
                    </svg>
                </Section>
            </div>
        )
    }
}

export default Home;