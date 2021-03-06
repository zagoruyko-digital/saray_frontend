import React from 'react';
import styled from 'styled-components';

//import Section from '../elements/Section';
import Drawer from '../elements/Drawer';
import Header from '../elements/Header';
//import NewsList from '../views/NewsList';
import NewsList from '../views/NewsList/index';

const Section = styled.section`
    position: relative;
    overflow: hidden;
    
    width: 100%;
`;

class News extends React.Component {
    render() {
        return (
            <Section>
                <Drawer />
                <Header caption={'Будьте в курсе событий'} title={'Новости фотостудии'} description={'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание систем массового участия. Таким образом укрепление и развитие структуры требуют определения и уточнения систем массового участия.'} />
                <NewsList></NewsList>
            </Section>
        )
    }
}

export default News;