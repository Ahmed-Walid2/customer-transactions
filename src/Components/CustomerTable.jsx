import React from 'react';

const CustomerTable = ({ customers, transactions }) => {
  console.log('Customers:', customers);
  console.log('Transactions:', transactions);

  return (
    <div className="container py-5">
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            const customer = customers.find(c => c.id === transaction.customer_id);
            console.log('Transaction:', transaction);
            console.log('Customer found:', customer); // Debugging log
            return (
              <tr key={transaction.id}>
                <td>{customer ? customer.name : 'Unknown'}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
