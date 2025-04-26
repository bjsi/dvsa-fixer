import twilio from 'twilio';

// Initialize Twilio client with test credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID || 'AC1234567890abcdef1234567890abcdef';
const authToken = process.env.TWILIO_AUTH_TOKEN || '1234567890abcdef1234567890abcdef';
const twilioPhone = process.env.TWILIO_PHONE_NUMBER || '+15005550006'; // Twilio's test phone number

const client = twilio(accountSid, authToken);

// Store verification codes (in production, use a proper database)
const verificationCodes = new Map<string, { code: string; timestamp: number }>();

export const generateVerificationCode = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const sendVerificationSMS = async (phoneNumber: string): Promise<boolean> => {
  try {
    const verificationCode = generateVerificationCode();
    
    // Store the code with timestamp
    verificationCodes.set(phoneNumber, {
      code: verificationCode,
      timestamp: Date.now()
    });

    // For development/testing, log the code instead of sending SMS
    console.log(`[TEST MODE] Verification code for ${phoneNumber}: ${verificationCode}`);

    // In production, uncomment this to actually send SMS
    // await client.messages.create({
    //   body: `Your verification code is: ${verificationCode}`,
    //   to: phoneNumber,
    //   from: twilioPhone
    // });

    return true;
  } catch (error) {
    console.error('Error sending SMS:', error);
    return false;
  }
};

export const verifyCode = (phoneNumber: string, code: string): boolean => {
  const storedData = verificationCodes.get(phoneNumber);
  
  if (!storedData) return false;
  
  // Check if code is expired (5 minutes)
  if (Date.now() - storedData.timestamp > 5 * 60 * 1000) {
    verificationCodes.delete(phoneNumber);
    return false;
  }
  
  // Check if code matches
  if (storedData.code === code) {
    verificationCodes.delete(phoneNumber);
    return true;
  }
  
  return false;
}; 