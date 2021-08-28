import { css, keyframes } from "styled-components"

const fadeInKeyFrames = keyframes`
    from {
        filter: blur(5px);
        opacity: 1;
    }

    to {
        filter: blur(0);
        opacity: 1;
    }
`

const appearFromTopKeyFrames = (from, to) => keyframes`
    from {
        top: ${from}
    }

    to {
        top: ${to}
    }
`

export const fadeIn = ({ time = '1s', type = 'ease'} = {}) => {
    return css` animation: ${time} ${fadeInKeyFrames} ${type}; `
}

// 
export const appearFromTop = ({ time = '1s', type = 'cubic-bezier(.18, .89, .32, 1.28)', from = '-25%', to = '-25px' } = {}) => {
    return css` 
        animation: ${time} ${appearFromTopKeyFrames(from, to)} ${type},
            ${time} ${fadeInKeyFrames} ease; 
    `
}