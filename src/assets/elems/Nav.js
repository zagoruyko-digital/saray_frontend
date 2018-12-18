import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaArrowRight, FaArrowLeft, FaSignInAlt } from 'react-icons/fa';

import Theme from '../../styles/Style';

const SignIn__Link = styled(Link)`
    position: fixed;
    right: 10px;
    bottom: 80px;
    z-index: 999;

    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${Theme.black};

    border-radius: 25px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: ${Theme.white};

    cursor: pointer;
`;

const Bar = styled.div`
    position: fixed;
    ${props => props.goBack ? 'right: 20px;' : 'right: -430px;'}
    bottom: 20px;
    z-index: 999;

    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.active ? 'transform: translateX(-450px);' : null}
    transition: transform .2s linear;
`;

const Bar__Toggler = styled.span`
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${Theme.black};

    border-radius: 25px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: ${Theme.white};

    cursor: pointer;
`;

const Navbar = styled.nav`
    margin-left: 25px;
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 25px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    background-color: ${Theme.white};
`;

const Navbar__Link = styled(Link)`
    margin-left: 10px;
    margin-right: 10px;

    color: ${Theme.black};
    font-size: .9rem;
    font-weight: 400;
`;

export default class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };

        this.handleToggleAction = this.handleToggleAction.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    handleToggleAction() {
        this.setState({
            active: !this.state.active
        });
    }

    handleGoBack() {
        this.props.history.goBack();
    }

    render() {
        const goBack = this.props.goBack;
        let container;

        if (goBack) {
            container = (
                <>
                    <Bar {...this.props}>
                        <Bar__Toggler {...this.props} onClick={this.handleGoBack}>
                            <FaArrowLeft />
                        </Bar__Toggler>
                    </Bar>
                </>
            );
        } else {
            container = (
                <>
                    <SignIn__Link to={'/signin'}>
                        <FaSignInAlt />
                    </SignIn__Link>
                    <Bar {...this.props} active={this.state.active}>
                        <Bar__Toggler onClick={this.handleToggleAction}>
                            {this.state.active ? <FaArrowRight /> : <FaBars />}
                        </Bar__Toggler>
                        <Navbar>
                            <Navbar__Link to={'/'}>Домашнаяя</Navbar__Link>
                            <Navbar__Link to={'/booking'}>Бронирование</Navbar__Link>
                            <Navbar__Link to={'/stock'}>Оборудование</Navbar__Link>
                            <Navbar__Link to={'/news'}>Новости</Navbar__Link>
                        </Navbar>
                    </Bar>
                </>
            );
        }

        return (
            <>
                {container}
            </>
        )
    }
}