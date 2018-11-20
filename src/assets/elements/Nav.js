import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaAngleDown,FaQuestion, FaVk, FaInstagram, FaPhone } from 'react-icons/fa';
import styled from 'styled-components';

import { API, isAuthenticated, getAccessToken, getRefreshToken } from '../../services/API';

import Button from '../elements/Button';
import Theme from '../../styles/Style';

const Div = styled.div`
    position: relative;

    ${props => props.active ? 'transform: translateX(250px);' : 'transform: translateX(0px);'}
    
    transition: transform .2s ease-in-out;
`;

const Drawer = styled.nav`
    position: absolute;
    z-index: 100;
    top: 0;

    padding: 20px 10px;
    width: 250px;
    height: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${Theme.white};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);

    transition: left .2s ease-in-out;
`;

const Drawer__Toggler = styled.span`
    position: absolute;
    top: 50px;
    left: 250px;

    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${Theme.white};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;

const Drawer__Header = styled.div`
    margin-bottom: 30px;

    display: grid;
    grid-template-columns: 70px auto;
`;

const Header__Avatar = styled.div`
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-size: cover;
    background-position: center center;
    background-repeat: none;
    background-color: ${Theme.primary};

    border-radius: 35px;

    & svg {
        color: ${Theme.white};
    }
`;

const Header__Body = styled.div`
    padding-left: 10px;

    display: grid;
    grid-template-rows: 50% 50%;
`;

const Header__BodyTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

const Header__BodyAction = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    & span {
        padding: 0;
        min-width: 0;

        text-transform: capitalize;
        color: ${Theme.secondary};
    }
`;

const Drawer__List = styled.div`
    position: relative;

    flex-grow: 1;

    & span {
        justify-content: flex-start;
    }

    & span:hover {
        color: ${Theme.white};

        background-color: ${Theme.primary};
        transition: background-color .2s ease-in-out, color .2s ease-in-out;
    }
`;

const Drawer__Dropdown = styled.div`
    position: relative;

    flex-grow: 1;

    & span {
        justify-content: space-between;
    }

    & span:hover {
        color: ${Theme.white};

        background-color: ${Theme.primary};
        transition: background-color .2s ease-in-out, color .2s ease-in-out;
    }
`;

const Drawer__DropdownContent = styled.div`
    ${props => props.active ? 'display: block;' : 'display: none;'}

    & span {
        justify-content: flex-start;

        font-weight: 300;
    }

    & span:hover {
        color: ${Theme.white};

        background-color: ${Theme.primary};
        transition: background-color .2s ease-in-out, color .2s ease-in-out;
    }
`;

const Drawer__Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Overlay = styled.div`
    position: absolute;
    z-index: 90;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: ${Theme.black};
    opacity: .7;

    ${props => props.active ? 'visibility: inherit;' : 'visibility: hidden;'}
`;

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <Drawer__Dropdown>
                <Button onClick={this.toggleDropdown}>{this.props.text}<FaAngleDown /></Button>
                <Drawer__DropdownContent active={this.state.active}>
                    {this.props.children}
                </Drawer__DropdownContent>
            </Drawer__Dropdown>
        )
    }
}

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        return (
            <Div active={this.state.active}>
                <Drawer active={this.state.active}>
                    <Drawer__Toggler onClick={this.toggleDrawer}>
                        <FaBars />
                    </Drawer__Toggler>
                    <Drawer__Header>
                        <Header__Avatar><FaQuestion /></Header__Avatar>
                        <Header__Body>
                            <Header__BodyTitle></Header__BodyTitle>
                            <Header__BodyAction>
                                    {
                                        isAuthenticated() ? 
                                            <Link to={'/user'}>
                                                <Button>Личный кабинет</Button>
                                            </Link>
                                        :
                                            <Link to={'/login'}>
                                                <Button>Войти</Button>
                                            </Link>
                                    }
                            </Header__BodyAction>
                        </Header__Body>
                    </Drawer__Header>
                    <Drawer__List>
                        <Link to={'/'}>
                            <Button>Главная страница</Button>
                        </Link>
                        <Link to={'/news'}>
                            <Button>Новости</Button>
                        </Link>
                        <Dropdown text={'Информация'}>
                            <Button>Цены</Button>
                            <Button>Правила студии</Button>
                            <Button>Оборудование</Button>
                            <Button>Договор</Button>
                            <Button>Статусы и привилегии</Button>
                        </Dropdown>
                        <Dropdown text={'Услуги'}>
                            <Button>Фотографы</Button>
                            <Button>Стилисты и визажисты</Button>
                            <Button>Проведение презентаций</Button>
                            <Button>Проведение мероприятий</Button>
                            <Button>Идеальное свидание</Button>
                        </Dropdown>
                        <Button>Выездная фотосессия</Button>
                        <Button>Печать</Button>
                    </Drawer__List>
                    <Drawer__Footer>
                        <a href={'https://vk.com'}>
                            <Button icon><FaVk /></Button>
                        </a>
                        <a href={'tel:89966391530'}>
                            <Button icon><FaPhone /></Button>
                        </a>
                        <a href={'https://instagram.com'}>
                            <Button icon><FaInstagram /></Button>
                        </a>
                    </Drawer__Footer>
                </Drawer>
                <Overlay active={this.state.active} onClick={this.toggleDrawer} />
            </Div>
        )
    }
}

export default Nav;