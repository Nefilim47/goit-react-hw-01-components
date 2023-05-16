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
    <StatStyle.Item style={{ background: getRandomHexColor() }}>
      <StatStyle.Label>{label}</StatStyle.Label>
      <span className="percentage">{percentage}</span>
    </StatStyle.Item>
  );
};
Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired,
};
