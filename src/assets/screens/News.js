import React from 'react';
import styled from 'styled-components';

import NewsList from '../views/NewsList';
import Nav from '../elements/Nav';
import H2 from '../elements/H2';
import P from '../elements/P';
import Button from '../elements/Button';
import Theme from '../../styles/Theme';

const Section = styled.section`
    position: relative;
    overflow: hidden;

    min-height: 100vh;
`;

const Header = styled.header`
    margin-top: 50px;

    padding: 0 10%;
`;

class News extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Section>
                    <Header>
                        <P mb={'10px'} uppercase primary>— Будьте в курсе событий</P>
                        <H2 mb={'10px'} capitalize black>Новости фотостудии</H2>
                        <P primary tall pr={'30%'}>С другой стороны рамки и место обучения кадров требуют от нас анализа направлений прогрессивного развития. Повседневная практика показывает, что укрепление и развитие структуры позволяет выполнять важные задания по разработке форм развития.</P>
                        <NewsList></NewsList>
                    </Header>
                </Section>
            </div>
        )
    }
}

export default News;