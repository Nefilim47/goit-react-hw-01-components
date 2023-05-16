import React from 'react';
import PropTypes from 'prop-types';
import { FriendStyle } from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendStyle.item>
      <FriendStyle.status status={isOnline}></FriendStyle.status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendStyle.item>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
