import styled from 'styled-components';
const status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
const item = styled.li`
  padding-left: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  border: 2px solid brown;
  margin-bottom: 10px;
  width: 200px;
`;
export const FriendStyle = {
  status,
  item,
};
