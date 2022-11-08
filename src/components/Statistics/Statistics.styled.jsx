import styled from 'styled-components';

export const StatisticsStyled = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${p => p.theme.space[3]}px;

    width: ${p => p.theme.space[8]}px;
    margin: ${p => p.theme.space[5]}px;

`;

export const Text = styled.p`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xs};

`;

export const Span = styled.span`
    font-family: ${p => p.theme.fonts.boby};
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes.m};
`;

export const ListItem = styled.li`
`;
