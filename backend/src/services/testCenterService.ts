import { testCenters, TestCenter } from '../data/testCenters';

interface TestCenterWithDistance extends TestCenter {
  name: string;
  distance?: number;
}

// Simple function to calculate distance between two postcodes
// In a real application, you would use a proper postcode distance calculation service
const calculateDistance = (postcode1: string, postcode2: string): number => {
  // This is a placeholder. In reality, you would:
  // 1. Convert postcodes to coordinates using a postcode lookup service
  // 2. Calculate the actual distance between coordinates
  return Math.random() * 10; // Random distance for demo purposes
};

export const getAllTestCenters = (): TestCenterWithDistance[] => {
  return Object.entries(testCenters).map(([name, center]) => ({
    name,
    address: center.address,
    city: center.city,
    county: center.county,
    postcode: center.postcode,
    availableSlots: center.availableSlots
  }));
};

export const searchTestCentersByPostcode = (userPostcode: string): TestCenterWithDistance[] => {
  return Object.entries(testCenters)
    .map(([name, center]) => ({
      name,
      address: center.address,
      city: center.city,
      county: center.county,
      postcode: center.postcode,
      availableSlots: center.availableSlots,
      distance: calculateDistance(userPostcode, center.postcode)
    }))
    .sort((a, b) => (a.distance || 0) - (b.distance || 0));
}; 