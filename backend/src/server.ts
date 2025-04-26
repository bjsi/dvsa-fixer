import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4545;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 