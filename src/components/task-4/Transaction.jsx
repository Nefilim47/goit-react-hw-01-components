import React from 'react';
import { TransactionHistory } from './TransactionHistory';

export const Transaction = ({ trans }) => {
  return (
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
  );
};
