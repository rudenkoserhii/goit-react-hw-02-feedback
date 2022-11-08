import styled from 'styled-components';

export const NotificationStyled = styled.p`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xs};
    text-transform: uppercase;
    text-align: center;

    width: ${p => p.theme.space[8]}px;
    margin: ${p => p.theme.space[5]}px;

    animation: vibrate 0.3s linear infinite both;

    @-webkit-keyframes vibrate {
    0% {
        -webkit-transform: translate(0);
                transform: translate(0);
    }
    20% {
        -webkit-transform: translate(-2px, 2px);
                transform: translate(-2px, 2px);
    }
    40% {
        -webkit-transform: translate(-2px, -2px);
                transform: translate(-2px, -2px);
    }
    60% {
        -webkit-transform: translate(2px, 2px);
                transform: translate(2px, 2px);
    }
    80% {
        -webkit-transform: translate(2px, -2px);
                transform: translate(2px, -2px);
    }
    100% {
        -webkit-transform: translate(0);
                transform: translate(0);
    }
    }
    @keyframes vibrate {
    0% {
        -webkit-transform: translate(0);
                transform: translate(0);
    }
    20% {
        -webkit-transform: translate(-2px, 2px);
                transform: translate(-2px, 2px);
    }
    40% {
        -webkit-transform: translate(-2px, -2px);
                transform: translate(-2px, -2px);
    }
    60% {
        -webkit-transform: translate(2px, 2px);
                transform: translate(2px, 2px);
    }
    80% {
        -webkit-transform: translate(2px, -2px);
                transform: translate(2px, -2px);
    }
    100% {
        -webkit-transform: translate(0);
                transform: translate(0);
    }
}`;