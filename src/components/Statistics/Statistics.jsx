import { StatisticsStyled, Text, Span, ListItem } from "./Statistics.styled";
import PropTypes from 'prop-types';

export const Statistics = ( { good, neutral, bad, total, positivePercentage }) => {
return (
  <StatisticsStyled>
{ [ {'Good': Number(Object.values({good}).toString())},
    {'Neutral': Number(Object.values({neutral}).toString())},
    {'Bad': Number(Object.values({bad}).toString())},
    {'Total': Number(Object.values({total}).toString())},
    {'Positive feedback': Number(Object.values({positivePercentage}).toString())}]
    .map((prop, index) => <ListItem key={index}><Text>{Object.keys(prop).toString()}: <Span>{Number(Object.values(prop).toString())}</Span></Text></ListItem>)}
  </StatisticsStyled>
)};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};