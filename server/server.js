const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); //  cors package

const app = express();
app.use(cors()); // enable CORS for all routes
app.use(bodyParser.json());

app.post('/order', (req, res) => {
  console.log('Order received:', req.body);
  res.json({ message: 'Order received' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
