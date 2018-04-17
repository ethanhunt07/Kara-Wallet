import React from 'react';
import { Table } from 'reactstrap';
import Panel from 'muicss/lib/react/panel';
import PropTypes from 'prop-types';

import styles from './style.scss';

const DashboardTransactionsTable = ({ transactionsList }) => (
  <Panel className={styles['containing-panel']}>
    <header className={styles['containing-panel--header']}>
      <h3 className={styles['containing-panel--title']}>Transactions</h3>
    </header>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Time</th>
          <th>Transaction ID</th>
          <th>From/To</th>
          <th>Amount</th>
          <th>Fee</th>
        </tr>
      </thead>
      <tbody>
        {transactionsList.map((transactionItem, index) => (
          <tr key={transactionItem.id}>
            <th scope="row">{index + 1}</th>
            <td>{transactionItem.time}</td>
            <td>{transactionItem.id}</td>
            <td>{`${transactionItem.fromAddress} / ${transactionItem.toAddress}`}</td>
            <td>{transactionItem.amount}</td>
            <td>{transactionItem.fee}</td>
          </tr>
        ))
}
      </tbody>
    </Table>
  </Panel>

);

DashboardTransactionsTable.propTypes = {
  transactionsList: PropTypes.arrayOf(PropTypes.shape({
    time: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    fromAddress: PropTypes.string.isRequired,
    toAddress: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    fee: PropTypes.string.isRequired
  })).isRequired
};

export default DashboardTransactionsTable;
