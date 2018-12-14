import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
    position: relative;
    overflow: hidden;
    
    width: 100%;
`;

export default class ResizableSection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: '',
        };

        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    handleWindowResize() {
        this.setState({
            height: window.innerHeight + 'px'
        });
    }

    componentWillMount() {
        this.handleWindowResize();
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    render() {
        return <Container style={{height: this.state.height}} {...this.props}>{this.props.children}</Container>
    }
}