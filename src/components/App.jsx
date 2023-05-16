import React from 'react';
import { Card } from './task-1/users-card';
import { FriendListItem } from './task-3/FriendListItem';
import { TransactionHistory } from './task-4/TransactionHistory';

import user from './task-1/user.json';
import friends from './task-3/friends.json';
import trans from './task-4/transactions.json';
import { Upload } from './task-2/Upload';

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
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((tran, index) => (
            <TransactionHistory
              key={tran.id}
              index={index}
              type={tran.type}
              amount={tran.amount}
              currency={tran.currency}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
