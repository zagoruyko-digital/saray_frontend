import React from 'react';

import List from './List';

import Text from '../elems/Text';
import Nav from '../elems/Nav';
import { Section } from './style';

export default function StockPage() {
    return (
        <Section>
            <Nav />
            <Text selector={'P'} mb={'10px'} light uppercase primary>Добро пожаловать</Text>
            <Text selector={'H2'} mb={'10px'} bold capitalize black>Посмотрите что у нас для вас есть</Text>
            <Text selector={'P'} mb={'30px'} light primary>Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Таким образом сложившаяся структура организации в значительной степени обуславливает создание форм развития.</Text>
            <List />
        </Section>
    )
}