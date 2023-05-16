import React from 'react';
import friends from './friends.json';
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
{
  /* <UserStyles.Status status={isOnline}></UserStyles.Status>; */
}
