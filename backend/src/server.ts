import express from 'express';
import cors from 'cors';
import smsRoutes from './routes/smsRoutes';
import testCenterRoutes from './routes/testCenterRoutes';

const app = express();
const port = process.env.PORT || 4545;

// Middleware
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