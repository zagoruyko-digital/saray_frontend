import React from 'react';

import Section from '../elements/Section';
import Nav from '../elements/Nav';
import Header from '../elements/Header';

class NotFound extends React.Component {
    render() {
        return (
            <Section>
                <Nav />
                <Header caption={'Упс... Вы не нашли, что искали?'} title={'Страница не найдена'} description={'Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности в значительной степени обуславливает создание систем массового участия. Таким образом укрепление и развитие структуры требуют определения и уточнения систем массового участия.'} />
            </Section>
        )
    }
}

export default NotFound;