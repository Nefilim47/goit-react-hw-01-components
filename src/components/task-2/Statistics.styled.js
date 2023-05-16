import styled from 'styled-components';

const statistics = styled.h2`
  padding-left: 90px;
`;

const statList = styled.ul`
  display: flex;
  list-style: none;
`;
const item = styled.li`
  width: 70px;
  height: 70px;
  text-align: center;
`;
const label = styled.span`
  display: block;
  padding: 8px;
`;
export const StatStyle = {
  statList,
  item,
  statistics,
  label,
};
