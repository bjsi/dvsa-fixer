import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

interface TestCenter {
  name: string;
  address: string;
  city: string;
  county: string;
  postcode: string;
  availableSlots: number;
  distance?: number;
}

const TestCenterBooking: React.FC = () => {
  const [postcode, setPostcode] = useState('');
  const [testCenters, setTestCenters] = useState<TestCenter[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { isPhoneVerified } = useAuth();

  useEffect(() => {
    // Load test centers from the backend
    const loadTestCenters = async () => {
      try {
        const response = await fetch('http://localhost:4545/api/test-centers');
        const data = await response.json();
        setTestCenters(data);
      } catch (err) {
        setError('Failed to load test centers');
      }
    };

    loadTestCenters();
  }, []);

  const handlePostcodeSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`http://localhost:4545/api/test-centers/search?postcode=${postcode}`);
      const data = await response.json();
      
      if (response.ok) {
        setTestCenters(data);
      } else {
        setError(data.error || 'Failed to search test centers');
      }
    } catch (err) {
      setError('Failed to connect to the server');
    } finally {
      setLoading(false);
    }
  };

  if (!isPhoneVerified) {
    return null;
  }

  return (
    <div className="card">
      <h2>Book Your Test</h2>
      <form onSubmit={handlePostcodeSearch}>
        <div>
          <input
            type="text"
            placeholder="Enter your postcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Search Test Centers'}
          </button>
        </div>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {testCenters.length > 0 && (
        <div className="test-centers-list">
          <h3>Available Test Centers</h3>
          {testCenters
            .filter(center => center.availableSlots > 1)
            .map(center => (
              <div key={center.name} className="test-center-card">
                <h4>{center.name}</h4>
                <p>Address: {center.address}</p>
                <p>City: {center.city}</p>
                <p>County: {center.county}</p>
                <p>Postcode: {center.postcode}</p>
                <p>Available Slots: {center.availableSlots}</p>
                {center.distance && (
                  <p>Distance: {center.distance.toFixed(1)} miles</p>
                )}
                <button onClick={() => {/* TODO: Handle center selection */}}>
                  Select This Center
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default TestCenterBooking; 