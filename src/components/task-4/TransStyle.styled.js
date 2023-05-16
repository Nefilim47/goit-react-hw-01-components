import styled from 'styled-components';
const StringTr = styled.tr`
  height: 50px;
  background-color: ${props =>
    props.cardId % 2 === 0 ? 'lightblue' : 'white'};
`;
export const TransStyle = {
  StringTr,
};
