import React from 'react';
import { Statistics } from './Statistics.jsx';
import stat from './data.json';
import { StatStyle } from './Statistics.styled.js';

export const Upload = () => {
  return (
    <section>
      <StatStyle.Statistics>Upload stats</StatStyle.Statistics>
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
