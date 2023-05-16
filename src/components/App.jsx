import React from 'react';
import { Card } from './task-1/users-card';
import { Statistics } from './task-2/Statistics.jsx';
import { StatStyle } from './task-2/Statistics.styled.js';
import { FriendListItem } from './task-3/FriendListItem';

import user from './task-1/user.json';
import stat from './task-2/data.json';
import friends from './task-3/friends.json';

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
      <section>
        <StatStyle.statistics>Upload stats</StatStyle.statistics>
        <StatStyle.statList>
          {stat.map(st => (
            <Statistics
              key={st.id}
              label={st.label}
              percentage={st.percentage}
              getRandomHexColor
            />
          ))}
        </StatStyle.statList>
      </section>
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
    </>
  );
};
