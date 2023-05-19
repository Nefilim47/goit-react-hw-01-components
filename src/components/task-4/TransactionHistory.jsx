import React from 'react';
import PropTypes from 'prop-types';
import { TransStyle } from './TransStyle.styled';

export const TransactionHistory = ({ index, type, amount, currency }) => {
  return (
    <TransStyle.StringTr cardId={index}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TransStyle.StringTr>
  );
};
TransactionHistory.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
