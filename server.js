const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let customers = [
    {id: 1, name: "Ahmed Ali" },
    {id: 2, name: "Aya Elsayed" },
    {id: 3, name: "Mina Adel" },
    {id: 4, name: "Sarah Reda" },
    {id: 5, name: "Mohamed Sayed" }
];

let transactions = [
    { id: 1, "customer_id": 1, date: "01-01-2022", amount: 1000 },
    { id: 2, "customer_id": 1, date: "01-02-2022", amount: 2000 },
    { id: 3, "customer_id": 2, date: "01-01-2022", amount: 550 },
    { id: 4, "customer_id": 3, date: "01-01-2022", amount: 500 },
    { id: 5, "customer_id": 2, date: "01-02-2022", amount: 1300 },
    { id: 6, "customer_id": 4, date: "01-01-2022", amount: 750 },
    { id: 7, "customer_id": 3, date: "01-02-2022", amount: 1250 },
    { id: 8, "customer_id": 5, date: "01-01-2022", amount: 2500 },
    { id: 9, "customer_id": 5, date: "01-02-2022", amount: 875 },
];

app.get('/customers', (req, res) => {
  res.json(customers);
});

app.get('/transactions', (req, res) => {
  res.json(transactions);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
