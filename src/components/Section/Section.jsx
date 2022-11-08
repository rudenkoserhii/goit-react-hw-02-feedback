import { SectionStyled, Title } from "./Section.styled";
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
        return (
                <SectionStyled >
                        <Title>{title}</Title>
                        {children}
                </SectionStyled>
)};

Section.propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
};