import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';
import Skeleton from 'react-skeleton-loader';
import { FaBars, FaArrowLeft, FaHome, FaNewspaper, FaInfo, FaHandsHelping, FaCameraRetro, FaPrint, FaAngleDown, FaInstagram, FaMobileAlt, FaVk, FaRegSmile } from 'react-icons/fa';

import { API, isAuthenticated, getAccessToken, getRefreshToken } from '../../services/API';

import Text from '../selectors/Text';
import Theme from '../../styles/Style';

const Header = styled.div`
    padding: 20px 16px;
    width: 100%;

    display: grid;
    grid-gap: 10px;
    grid-template-rows: 50px 50px;
`;

const Header__Image = styled.div`
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 25px;
    background-color: ${Theme.secondary_};
`;

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            loading: false,
            data: []
        };
    }

    componentDidMount() {
        this.setState({
            isAuthenticated: !!isAuthenticated()
        });

        if (!!isAuthenticated()) {
            this.setState({
                loading: true
            }); 

            const url = 'http://' + API.production + API.v0 + 'user/';

            fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization' : 'Token ' + getAccessToken(), 
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res[0],
                    loading: false
                });
            })
            .catch(error => {
                console.log(error)
            })
        }
    }

    render() {
        const { loading } = this.state;

        if (loading) {
            return (
                <Header>
                    {
                        this.state.isAuthenticated ?
                            <>
                                <div>
                                    <Header__Image>
                                        <Loader type={'Triangle'} color={Theme.white} width={'30'} height={'30'} />
                                    </Header__Image>
                                </div>
                                <div>
                                    <Text selector={'H3'} mb={'10px'} extrabold capitalize black><Skeleton /></Text>
                                    <Link to={'/user'} style={{color: Theme.secondary_}}>Личный кабинет</Link>
                                </div>
                            </>
                        :
                            <>
                                <div>
                                    <Text selector={'H3'} extrabold capitalize black center style={{fontSize: '2.3rem'}}>SARAY</Text>
                                    <Text selector={'P'} extrabold capitalize black center>PHOTO STUDIO</Text>
                                </div>
                                <div>
                                <Link to={'/login'} style={{color: Theme.secondary_, display: 'flex', justifyContent: 'center'}}>Войти или зарегистрироваться</Link>
                                </div>
                            </>
                    }
                </Header>
            )
        }

        return (
            <Header>
                {
                    this.state.isAuthenticated ?
                        <>
                            <div>
                                <Header__Image>
                                    { this.state.data.image ? <img src={this.state.data.image} /> : <FaRegSmile style={{color: Theme.white, fontSize: '2.25rem'}} />}
                                </Header__Image>
                            </div>
                            <div>
                                <Text selector={'H3'} mb={'10px'} extrabold capitalize black>{this.state.data.first_name} {this.state.data.last_name}</Text>
                                <Link to={'/user'} style={{color: Theme.secondary_}}>Личный кабинет</Link>
                            </div>
                        </>
                    :
                        <>
                            <div>
                                <Text selector={'H3'} extrabold capitalize black center style={{fontSize: '2.3rem'}}>SARAY</Text>
                                <Text selector={'P'} extrabold capitalize black center>PHOTO STUDIO</Text>
                            </div>
                            <div>
                            <Link to={'/login'} style={{color: Theme.secondary_, display: 'flex', justifyContent: 'center'}}>Войти или зарегистрироваться</Link>
                            </div>
                        </>
                }
            </Header>
        )
    }
}

const Dropdown__Item = styled.span`
    padding: 0 16px;
    height: 32px;

    display: flex;
    flex-direction: row;
    align-items: center;

    color: ${Theme.black};
    font-size: 1rem;
    font-weight: 400;

    cursor: pointer;

    & svg {
        margin-right: 8px;

        color: ${Theme.primary_};
        font-size: 1.3rem;
    }

    & svg:nth-child(2) {
        position: absolute;
        right: 20px;
       
        ${props => props.active ? 'transform: rotate(180deg);' : null}
        transition: transform .2s linear;
    }

    &:hover {
        box-shadow: inset 7px 0 0 0 ${Theme.secondary_};
    }

    &:hover svg {
        color: ${Theme.secondary_};
    }
`;

const Dropdown__Content = styled.span`
    & a {
        padding-left: 42px;

        font-weight: 300;
    }

    ${props => props.active ? 'display: block;' : 'display: none;'}
`;

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };

        this.toggleAction = this.toggleAction.bind(this);
    }

    toggleAction() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <>
                <Dropdown__Item onClick={this.toggleAction} active={this.state.active}>
                    {this.props.icon}
                    {this.props.text}
                    <FaAngleDown />
                </Dropdown__Item>
                <Dropdown__Content active={this.state.active}>
                    {this.props.children}
                </Dropdown__Content>
            </>
        )
    }
}

const Overlay = styled.div`
    position: absolute;
    z-index: 90;

    width: 100%;
    height: 100%;

    background-color: ${Theme.black};
    opacity: .5;

    ${props => props.active ? 'display: block;' : 'display: none;'}
`;

const Container = styled.div`
    position: absolute;
    z-index: 100;
    left: -250px;

    width: 250px;
    height: 100%;

    display: flex;
    flex-direction: column;

    border-top: 10px solid ${Theme.secondary_};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: ${Theme.white};

    ${props => props.active ? 'transform: translateX(250px);' : null}
    transition: transform .2s linear;
`

const Container__Action = styled.span`
    position: absolute;
    top: 50px;
    left: 250px;

    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    background-color: ${Theme.white};
`;

const Body = styled.nav`
    flex-grow: 1;
`;

const Body__Item = styled(Link)`
    padding: 0 16px;
    height: 32px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    color: ${Theme.black};
    font-size: 1rem;
    font-weight: 400;

    & svg {
        margin-right: 8px;

        color: ${Theme.primary_};
        font-size: 1.3rem;
    }

    &:hover {
        box-shadow: inset 7px 0 0 0 ${Theme.secondary_};
    }

    &:hover svg {
        color: ${Theme.secondary_};
    }
`;

const Footer = styled.div`
    margin-bottom: 30px;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    & a {
        color: ${Theme.primary}

        transition: color .2s linear;
    }

    & a:hover {
        color: ${Theme.secondary_}
    }

    & a svg {
        font-size: 1.5rem;
    }
`;

class Drawer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };

        this.toggleAction = this.toggleAction.bind(this);
    }

    toggleAction() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <>
                <Overlay active={this.state.active} onClick={this.toggleAction} />
                <Container active={this.state.active}>
                    <Container__Action onClick={this.toggleAction}>
                        {
                            this.state.active ? <FaArrowLeft /> : <FaBars />
                        }
                    </Container__Action>

                    <User />
                    <Body>
                        <Body__Item to={'/'}>
                            <FaHome />
                            SARAY Photo Studio
                        </Body__Item>
                        <Dropdown icon={<FaInfo />} text={'Информация'}>
                            <Body__Item to={'/'}>
                                Цены
                            </Body__Item>
                            <Body__Item to={'/'}>
                                Правила студии
                            </Body__Item>
                            <Body__Item to={'/'}>
                                Оборудование
                            </Body__Item>
                            <Body__Item to={'/'}>
                                Договор
                            </Body__Item>
                            <Body__Item to={'/'}>
                                Статусы и привилегии
                            </Body__Item>
                        </Dropdown>
                        <Dropdown icon={<FaHandsHelping />} text={'Услуги'}>
                            <Body__Item to={'/'}>
                                Фотографы
                            </Body__Item>
                            <Body__Item to={'/'}>
                                Стилисты и визажисты
                            </Body__Item>
                            <Body__Item to={'/'}>
                                Проведение презентация
                            </Body__Item>
                            <Body__Item to={'/'}>
                                Проведение мероприятий
                            </Body__Item>
                            <Body__Item to={'/'}>
                                Идеальное свидание
                            </Body__Item>
                        </Dropdown>
                        <Body__Item to={'/news'}>
                            <FaNewspaper />
                            Новости
                        </Body__Item>
                        <Body__Item to={'/'}>
                            <FaCameraRetro />
                            Выездная фотосессия
                        </Body__Item>
                        <Body__Item to={'/'}>
                            <FaPrint />
                            Печать
                        </Body__Item>
                    </Body>
                    <Footer>
                        <a href={'#!'}>
                            <FaInstagram />
                        </a>
                        <a href={'#!'}>
                            <FaMobileAlt />
                        </a>
                        <a href={'#!'}>
                            <FaVk />
                        </a>
                    </Footer>
                </Container>
            </>
        )
    }
}

export default Drawer;