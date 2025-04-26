const express = require('express');
const cors = require('cors');
const smsRoutes = require('./routes/smsRoutes');
const testCenterRoutes = require('./routes/testCenterRoutes');

const app = express();
const port = process.env.PORT || 4545;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/sms', smsRoutes);
app.use('/api/test-centers', testCenterRoutes);

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 