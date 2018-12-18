import { css } from 'styled-components';

const sizes = {
    desktop: 992,
    landscape: 576
}

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}, {})

const ThemePrimary = {
    primary: '#4D4D4D',
    secondary: '#018CF5',
    black: '#2D2D2D',
    white: '#FDFDFD',
};

export default ThemePrimary;