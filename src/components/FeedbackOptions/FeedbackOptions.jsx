import { FeedbackOptionsStyled, ListItem, Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
return (
    <FeedbackOptionsStyled>
        {options.map((option, index) =>
        <ListItem key={index}>
            <Button className="text-shadow-drop-center text-shadow-drop-center--2" type="button" onClick={onLeaveFeedback}>{option}</Button>
        </ListItem>
        )}
    </FeedbackOptionsStyled>
)};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};