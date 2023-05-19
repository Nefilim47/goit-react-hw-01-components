// export const FriendsListItem = ({ avatar, name, isOnline }) => {
//   return (
//     <li>
//       <span isOnline={isOnline}></span>
//       <img src={avatar} alt="User avatar" width="48" />
//       <p>{name}</p>
//     </li>
//   );
// };
import React from 'react';
import PropTypes from 'prop-types';
import { FriendStyle } from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendStyle.Item>
      <FriendStyle.Status status={isOnline}></FriendStyle.Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendStyle.Item>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
