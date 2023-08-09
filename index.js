const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express on Google Cloud Run!');
});

app.get('/test', (req, res) => {
  res.json({ message: 'Welcome to Thailand' });
});

app.get('/person', (req, res) => {
  let name = req.query.name;
  res.json({ message: `Welcome ${name}` });
});

app.post('/product', (req, res) => {
  const { name, amount, price } = req.body;
  if (name && amount && price) {
    res.json({ success: true, product: { name, amount, price } });
  } else {
    res.status(400).json({ success: false, message: 'Missing product data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
