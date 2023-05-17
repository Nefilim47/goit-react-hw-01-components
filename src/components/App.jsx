import React from 'react';
import { Card } from './task-1/users-card';

import user from './data/user.json';
import { Upload } from './task-2/Upload';
import { Friends } from './task-3/Friends.jsx';
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
      <Upload />
      <Friends />
      <Transaction />
    </>
  );
};
