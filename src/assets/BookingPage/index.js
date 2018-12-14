import React from 'react';

import Action from '../elems/Action';
import Text from '../elems/Text';
import Nav from '../elems/Nav';
import { Section, StudioGrid, StudioGrid__Item, StudioGrid__Title, BookingTypeGrid, BookingTypeCard, BookingTypeCard__Head, BookingTypeCard__Cost, BookingTypeCard__About, BookingTypeCard__Action } from './style';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            studio: true
        };
    }

    render() {
        return (
            <Section>
                <Nav />
                <Text selector={'P'} mb={'10px'} light uppercase primary>Добро пожаловать</Text>
                <Text selector={'H2'} mb={'10px'} bold capitalize black>Выбор зала</Text>
                <Text selector={'P'} mb={'30px'} light primary>Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Таким образом сложившаяся структура организации в значительной степени обуславливает создание форм развития.</Text>
                <StudioGrid>
                    <StudioGrid__Item selected={this.state.studio} style={{backgroundImage: 'url(' + 'https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' + ')'}}>
                        <StudioGrid__Title>
                            <Text selector={'H3'} mb={'10px'} extrabold white>Студия в Нидерландском стиле</Text>
                            <Text selector={'H1'} extrabold white>Ван Тао</Text>
                        </StudioGrid__Title>
                    </StudioGrid__Item>
                    <StudioGrid__Item style={{backgroundImage: 'url(' + 'https://images.pexels.com/photos/629161/pexels-photo-629161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' + ')'}}>
                        <StudioGrid__Title>
                            <Text selector={'H3'} mb={'10px'} extrabold white>Лофт-студия</Text>
                            <Text selector={'H1'} extrabold white>Археондри</Text>
                        </StudioGrid__Title>
                    </StudioGrid__Item>
                    <StudioGrid__Item style={{backgroundImage: 'url(' + 'https://images.pexels.com/photos/1303431/pexels-photo-1303431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' + ')'}}>
                        <StudioGrid__Title>
                            <Text selector={'H3'} mb={'10px'} extrabold white>Скандинавский рай</Text>
                            <Text selector={'H1'} extrabold white>Давар</Text>
                        </StudioGrid__Title>
                    </StudioGrid__Item>
                    <StudioGrid__Item style={{backgroundImage: 'url(' + 'https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' + ')'}}>
                        <StudioGrid__Title>
                            <Text selector={'H3'} mb={'10px'} extrabold white>Типо циклорама</Text>
                            <Text selector={'H1'} extrabold white>Хлодвиг I</Text>
                        </StudioGrid__Title>
                    </StudioGrid__Item>
                    <StudioGrid__Item style={{backgroundImage: 'url(' + 'https://images.pexels.com/photos/59106/pexels-photo-59106.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' + ')'}}>
                        <StudioGrid__Title>
                            <Text selector={'H3'} mb={'10px'} extrabold white>С балконом</Text>
                            <Text selector={'H1'} extrabold white>Маркетт</Text>
                        </StudioGrid__Title>
                    </StudioGrid__Item>
                    <StudioGrid__Item style={{backgroundImage: 'url(' + 'https://images.pexels.com/photos/158385/lake-mcdonald-landscape-panorama-sunset-158385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' + ')'}}>
                        <StudioGrid__Title>
                            <Text selector={'H3'} mb={'10px'} extrabold white>Уличный фонарь</Text>
                            <Text selector={'H1'} extrabold white>Огенри</Text>
                        </StudioGrid__Title>
                    </StudioGrid__Item>
                </StudioGrid>

                <Text selector={'H2'} mt={'50px'} mb={'10px'} bold capitalize black>Тип бронирования</Text>
                <Text selector={'P'} mb={'30px'} light primary>Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Таким образом сложившаяся структура организации в значительной степени обуславливает создание форм развития.</Text>
                <BookingTypeGrid>
                    <BookingTypeCard selected={this.state.studio}>
                        <BookingTypeCard__Head>
                            <Text selector={'H3'} mb={'10px'} bold capitalize black>Базовый</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности</Text>
                        </BookingTypeCard__Head>
                        <BookingTypeCard__Cost>
                            <div><span>1800</span><span>₽</span></div>
                        </BookingTypeCard__Cost>
                        <BookingTypeCard__About>
                            <Text selector={'P'} mt={'30px'} mb={'10px'} light primary>Базовое оснащение фотостудии</Text>
                            <Text selector={'P'} mb={'10px'} light primary><strong>2</strong> импульсных источника света</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Синхронизатор на выбор</Text>
                            <Text selector={'P'} light primary>Гримерка и душ</Text>
                        </BookingTypeCard__About>
                        <BookingTypeCard__Action>
                            <Action selector={'Button'} primaryOutline>Выбрать</Action>
                        </BookingTypeCard__Action>
                    </BookingTypeCard>
                    <BookingTypeCard>
                        <BookingTypeCard__Head>
                            <Text selector={'H3'} mb={'10px'} bold capitalize black>Гибкий</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности</Text>
                        </BookingTypeCard__Head>
                        <BookingTypeCard__Cost>
                            <div><span>2300</span><span>₽</span></div>
                        </BookingTypeCard__Cost>
                        <BookingTypeCard__About>
                            <Text selector={'P'} mt={'30px'} mb={'10px'} light primary><strong>3</strong> светоформирующие насадки на выбор</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Базовое оснащение фотостудии</Text>
                            <Text selector={'P'} mb={'10px'} light primary><strong>2</strong> импульсных источника света</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Синхронизатор на выбор</Text>
                            <Text selector={'P'} light primary>Гримерка и душ</Text>
                        </BookingTypeCard__About>
                        <BookingTypeCard__Action>
                            <Action selector={'Button'} primaryOutline>Выбрать</Action>
                        </BookingTypeCard__Action>
                    </BookingTypeCard>
                    <BookingTypeCard>
                        <BookingTypeCard__Head>
                            <Text selector={'H3'} mb={'10px'} bold capitalize black>Бизнес Базовый</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности</Text>
                        </BookingTypeCard__Head>
                        <BookingTypeCard__Cost>
                            <div><span>3600</span><span>₽</span></div>
                        </BookingTypeCard__Cost>
                        <BookingTypeCard__About>
                            <Text selector={'P'} mt={'30px'} mb={'10px'} light primary><strong>5</strong> светоформирующих насадок на выбор</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Базовое оснащение фотостудии</Text>
                            <Text selector={'P'} mb={'10px'} light primary><strong>3</strong> импульсных источника света</Text>
                            <Text selector={'P'} mb={'10px'} light primary><strong>1</strong> объектив Canon на выбор</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Синхронизатор на выбор</Text>
                            <Text selector={'P'} mb={'10px'} light primary><strong>1</strong> постоянный свет</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Помошник по свету</Text>
                            <Text selector={'P'} light primary>Гримерка и душ</Text>
                        </BookingTypeCard__About>
                        <BookingTypeCard__Action>
                            <Action selector={'Button'} primaryOutline>Выбрать</Action>
                        </BookingTypeCard__Action>
                    </BookingTypeCard>
                    <BookingTypeCard>
                        <BookingTypeCard__Head>
                            <Text selector={'H3'} mb={'10px'} bold capitalize black>Бизнес Гибкий</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности</Text>
                        </BookingTypeCard__Head>
                        <BookingTypeCard__Cost>
                            <div><span>6000</span><span>₽</span></div>
                        </BookingTypeCard__Cost>
                        <BookingTypeCard__About>
                            <Text selector={'P'} mt={'30px'} mb={'10px'} light primary>Любые светоформирующих насадок на выбор</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Базовое оснащение фотостудии</Text>
                            <Text selector={'P'} mb={'10px'} light primary><strong>3</strong> импульсных источника света</Text>
                            <Text selector={'P'} mb={'10px'} light primary><strong>3</strong> объектива Canon на выбор</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Любые декорации и мебель</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Фотоаппарат Canon D550</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Синхронизатор на выбор</Text>
                            <Text selector={'P'} mb={'10px'} light primary>Помошник по свету</Text>
                            <Text selector={'P'} mb={'10px'} light primary><strong>2</strong> постоянных света</Text>
                            <Text selector={'P'} light primary>Гримерка и душ</Text>
                        </BookingTypeCard__About>
                        <BookingTypeCard__Action>
                            <Action selector={'Button'} primaryOutline>Выбрать</Action>
                        </BookingTypeCard__Action>
                    </BookingTypeCard>
                </BookingTypeGrid>
            </Section>
        )
    }
}