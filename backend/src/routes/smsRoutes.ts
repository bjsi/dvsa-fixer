import express, { Request, Response, RequestHandler } from 'express';
import { sendVerificationSMS, verifyCode } from '../services/smsService';

const router = express.Router();

interface SendVerificationRequest {
  phoneNumber: string;
}

interface VerifyCodeRequest {
  phoneNumber: string;
  code: string;
}

const sendVerificationHandler: RequestHandler = async (req: Request, res: Response) => {
  const { phoneNumber } = req.body as SendVerificationRequest;
  
  if (!phoneNumber) {
    res.status(400).json({ error: 'Phone number is required' });
    return;
  }

  try {
    const success = await sendVerificationSMS(phoneNumber);
    if (success) {
      res.json({ message: 'Verification code sent successfully' });
    } else {
      res.status(500).json({ error: 'Failed to send verification code' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const verifyCodeHandler: RequestHandler = async (req: Request, res: Response) => {
  const { phoneNumber, code } = req.body as VerifyCodeRequest;
  
  if (!phoneNumber || !code) {
    res.status(400).json({ error: 'Phone number and code are required' });
    return;
  }

  const isValid = verifyCode(phoneNumber, code);
  res.json({ verified: isValid });
};

router.post('/send-verification', sendVerificationHandler);
router.post('/verify-code', verifyCodeHandler);

export default router; 