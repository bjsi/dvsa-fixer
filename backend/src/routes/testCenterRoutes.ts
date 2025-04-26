import express, { Request, Response, RequestHandler } from 'express';
import { getAllTestCenters, searchTestCentersByPostcode } from '../services/testCenterService';

const router = express.Router();

const getAllTestCentersHandler: RequestHandler = async (req: Request, res: Response) => {
  try {
    const centers = getAllTestCenters();
    res.json(centers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch test centers' });
  }
};

const searchTestCentersHandler: RequestHandler = async (req: Request, res: Response) => {
  const { postcode } = req.query;

  if (!postcode || typeof postcode !== 'string') {
    res.status(400).json({ error: 'Postcode is required' });
    return;
  }

  try {
    const centers = searchTestCentersByPostcode(postcode);
    res.json(centers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to search test centers' });
  }
};

router.get('/', getAllTestCentersHandler);
router.get('/search', searchTestCentersHandler);

export default router; 