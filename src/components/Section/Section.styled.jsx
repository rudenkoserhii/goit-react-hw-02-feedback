import styled from 'styled-components';

export const SectionStyled = styled.section`
    width: 100%;

`;

export const Title = styled.h2`
    font-family: ${p => p.theme.fonts.boby};
    text-align: center;

    width: ${p => p.theme.space[8]}px;
    margin: ${p => p.theme.space[5]}px;

`;
