import styled from 'styled-components';

export const FeedbackOptionsStyled = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${p => p.theme.space[3]}px;

    width: ${p => p.theme.space[8]}px;

`;

export const ListItem = styled.li`

`;

export const Button = styled.button`

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.xs};
    text-transform: uppercase;

    color: ${p => p.theme.colors.white};


    cursor: pointer;

    width: ${p => ((p.theme.space[8] - p.theme.space[3])/3)}px;
    height: ${p => p.theme.space[5]}px;
    padding: ${p => p.theme.space[4]}px;
    box-shadow: ${p => p.theme.shadows.first};
    border-radius: ${p => p.theme.radii.normal};
    border: ${p => p.theme.borders.none};

    :hover, :focus {animation: text-shadow-drop-center--2 0.6s both;

    @-webkit-keyframes text-shadow-drop-center--2 {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
        text-shadow: 0 0 18px rgba(0, 0, 0, 0.95);
    }
    }
    @keyframes text-shadow-drop-center {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
        text-shadow: 0 0 18px rgba(0, 0, 0, 0.95);
    }
    }
};

    animation: text-shadow-drop-center 0.6s both;
    

    @-webkit-keyframes text-shadow-drop-center {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
        text-shadow: 0 0 18px rgba(0, 0, 0, 0.65);
    }
    }
    @keyframes text-shadow-drop-center {
    0% {
        text-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }
    100% {
        text-shadow: 0 0 18px rgba(0, 0, 0, 0.65);
    }
    }


`;