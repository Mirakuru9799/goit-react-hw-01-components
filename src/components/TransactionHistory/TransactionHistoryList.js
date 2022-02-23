import TransactionHistory from './TransactionHistory';

function TransactionHistoryList({ transaction }) {
    return (
<table className="transactionHistory">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
        {transaction.map(transactions =>
          <tr key={transaction.id}>
            <TransactionHistory
              type={transactions.type}
              amount={transactions.amount}
              currency={transactions.currency}
            />
          </tr>
        )}
  </tbody>
</table>

    );
}

export default TransactionHistoryList;