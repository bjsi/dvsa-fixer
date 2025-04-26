import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const SMSVerification: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [error, setError] = useState('');
  const { setPhoneVerified } = useAuth();

  const handleSendCode = async () => {
    try {
      const response = await fetch('http://localhost:4545/api/sms/send-verification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setIsCodeSent(true);
        setError('');
      } else {
        setError(data.error || 'Failed to send verification code');
      }
    } catch (err) {
      setError('Failed to connect to the server');
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await fetch('http://localhost:4545/api/sms/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, code: verificationCode }),
      });

      const data = await response.json();
      
      if (response.ok && data.verified) {
        setPhoneVerified(true);
        setError('');
      } else {
        setError('Invalid verification code');
      }
    } catch (err) {
      setError('Failed to connect to the server');
    }
  };

  return (
    <div className="card">
      <h2>Phone Verification</h2>
      <p>Please verify your phone number to continue</p>
      <div>
        <input
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          disabled={isCodeSent}
        />
        {!isCodeSent && (
          <button onClick={handleSendCode}>Send Verification Code</button>
        )}
      </div>

      {isCodeSent && (
        <div>
          <input
            type="text"
            placeholder="Enter verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <button onClick={handleVerifyCode}>Verify Code</button>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SMSVerification; 