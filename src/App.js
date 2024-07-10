import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerTable from './Components/CustomerTable';
import Filter from './Components/Filter';
import TransactionChart from './Components/TransactionChart';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const fetchData = async () => {
    try {
      const customersResponse = await axios.get('http://localhost:3001/customers');
      const transactionsResponse = await axios.get('http://localhost:3001/transactions');
      setCustomers(customersResponse.data);
      setTransactions(transactionsResponse.data);
      setFilteredTransactions(transactionsResponse.data);
    
    
    } catch (error) {
      console.error("There was an error fetching the data!", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = (name, amount) => {
    const filtered = transactions.filter(transaction => {
      const customer = customers.find(c => c.id === transaction.customer_id);
      return (!name || (customer && customer.name.toLowerCase().includes(name.toLowerCase()))) &&
            (!amount || transaction.amount >= amount);
    });
    setFilteredTransactions(filtered);
  };

  return (
    <>
     <div className='container pt-5'>

      <h1 className='mb-4'>Customer Transactions</h1>
      <Filter onFilter={handleFilter} />
      <CustomerTable onFetchData={fetchData} customers={customers} transactions={filteredTransactions} />
      <TransactionChart transactions={filteredTransactions}  />
      </div>
    </>
  );
};

export default App;
