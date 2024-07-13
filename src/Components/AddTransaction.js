import React, { useState } from 'react';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value); // Update text state with input value
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value); // Update amount state with input value
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Perform actions on form submission (e.g., add transaction logic)
    console.log('Text:', text);
    console.log('Amount:', amount);

    // Clear input fields after submission
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={handleTextChange} // Pass handleTextChange function directly
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange} // Pass handleAmountChange function directly
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
