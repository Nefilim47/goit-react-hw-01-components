import React from 'react';

import user from '../data/user.json';
import stat from '../data/data.json';
import friends from '../data/friends.json';
import trans from '../data/transactions.json';

import { Card } from './task-1/users-card';
import { Upload } from './task-2/Upload';
import { FriendList } from './task-3/Friends.jsx';
import { Transaction } from './task-4/Transaction';

export const App = () => {
  return (
    <>
      <Card
        avatar={user.avatar}
        location={user.location}
        username={user.username}
        tag={user.tag}
        stats={user.stats}
      />
      <Upload title="Upload stats" stat={stat} />
      <FriendList friends={friends} />
      <Transaction trans={trans} />
    </>
  );
};
