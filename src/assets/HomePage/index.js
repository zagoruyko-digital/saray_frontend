import React from 'react';

import Theme from '../../styles/Style';
import Nav from '../elems/Nav';
import { Section, Video } from './style';

export default function HomePage() {
    return (
        <Section>
            <Nav />

            <Video loop autoPlay playsInline muted src={'http://138.197.142.45:8000/static/background.mp4'} />
            <svg width={'100%'} height={'100%'} viewBox={'0 0 325 140'} preserveAspectRatio="xMidYMid slice">
                <defs>
                    <mask id={'overlay'}>
                        <rect width={'100%'} height={'100%'} fill={Theme.white} />
                        <text x={'50%'} y={'50%'} fontSize={'20px'} fontWeight={'700'} fontFamily={'Roboto'} textAnchor={'middle'}>SARAY</text>
                        <text x={'50%'} y={'56%'} fontSize={'9px'} fontWeight={'200'} fontFamily={'Roboto'} textAnchor={'middle'}>PHOTO STUDIO</text>
                    </mask>
                </defs>
                <rect width={'100%'} height={'100%'} fill={Theme.white} mask={'url(#overlay)'} />
            </svg>
        </Section>
    )
}