import styled from 'styled-components';
const stringTr = styled.tr`
  background-color: ${props =>
    props.cardId % 2 === 0 ? 'lightblue' : 'white'};
`;
export const TransStyle = {
  stringTr,
};