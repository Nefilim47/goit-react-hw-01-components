import PropTypes from 'prop-types';
import React from 'react';
import { StatStyle } from './Statistics.styled.js';

export const Statistics = ({ label, percentage }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  return (
    <StatStyle.item style={{ background: getRandomHexColor() }}>
      <StatStyle.label>{label}</StatStyle.label>
      <span className="percentage">{percentage}</span>
    </StatStyle.item>
  );
};
Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};
