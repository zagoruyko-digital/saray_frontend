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
    primary_: '#F5F7F8',
    secondary: '#95AAC9',
    secondary_: '#188FF2',
    black: '#2D2D2D',
    white: '#FDFDFD',
};

export default ThemePrimary;