import React, { useState } from 'react';

export default function Filter({ onFilter }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
 

    const handleFilter = () => {
    onFilter(name, amount);
    };

    return (
    <>
    <div className="container">
        
   <div className="row mb-2">
  <div className="col">
  <input  className="form-control"
type="text" 
placeholder="Customer Name" 
value={name}
onChange={e => setName(e.target.value)}
        />
  </div>
  <div className="col">
  <input
 className="form-control"
    type="number" 
    placeholder="Transaction Amount" 
    value={amount}
    onChange={e => setAmount(e.target.value)}
        />
  </div>
</div>


  
        {/* <input  className="form-control"
type="text" 
placeholder="Customer Name" 
value={name}
onChange={e => setName(e.target.value)}
        />
        <input
    type="number" 
    placeholder="Transaction Amount" 
    value={amount}
    onChange={e => setAmount(e.target.value)}
        /> */}
        <button className='btn btn-success' onClick={handleFilter}>Filter</button>
        </div>
    </>
    );
}
