import React from 'react';
import { Statistics } from './Statistics.jsx';
import { StatStyle } from './Statistics.styled.js';
import PropTypes from 'prop-types';

export const Upload = ({ stat, title }) => {
  return (
    <section>
      {title && <StatStyle.Statistics>{title}</StatStyle.Statistics>}

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
Upload.propTypes = {
  stat: PropTypes.array,
  title: PropTypes.string,
};
