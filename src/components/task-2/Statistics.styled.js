import styled from 'styled-components';

const Statistics = styled.h2`
  padding-left: 90px;
`;

const StatList = styled.ul`
  display: flex;
  list-style: none;
  //
`;
const Item = styled.li`
  width: 70px;
  height: 70px;
  text-align: center;
`;
const Label = styled.span`
  display: block;
  padding: 8px;
`;
export const StatStyle = {
  StatList,
  Item,
  Statistics,
  Label,
};
