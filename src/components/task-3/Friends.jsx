import React from 'react';
import friends from '../data/friends.json';
import { FriendListItem } from './FriendListItem';

export const Friends = () => {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
};
