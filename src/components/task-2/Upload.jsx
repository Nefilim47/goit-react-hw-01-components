import React from 'react';
import { Statistics } from './Statistics.jsx';
import { StatStyle } from './Statistics.styled.js';

export const Upload = ({ stat }) => {
  return (
    <section>
      <StatStyle.Statistics>{stat.title}</StatStyle.Statistics>
      <StatStyle.StatList>
        {stat.map(st => (
          <Statistics
            key={st.id}
            label={st.label}
            percentage={st.percentage}
            getRandomHexColor
          />
        ))}
      </StatStyle.StatList>
    </section>
  );
};
