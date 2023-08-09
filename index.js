const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Running');
});

const dateArr = [];
app.get('/setdate', (req, res) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    dateArr.push(`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);

    res.json({ success: true });
});

app.get('/getdate', (req, res) => {
    res.json({ success: true, result: dateArr });
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
