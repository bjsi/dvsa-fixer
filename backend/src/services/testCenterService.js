const testCenters = require('../../../testCenters');

// Simple function to calculate distance between two postcodes
// In a real application, you would use a proper postcode distance calculation service
const calculateDistance = (postcode1, postcode2) => {
  // This is a placeholder. In reality, you would:
  // 1. Convert postcodes to coordinates using a postcode lookup service
  // 2. Calculate the actual distance between coordinates
  return Math.random() * 10; // Random distance for demo purposes
};

const getAllTestCenters = () => {
  return Object.entries(testCenters).map(([name, center]) => ({
    name,
    ...center
  }));
};

const searchTestCentersByPostcode = (userPostcode) => {
  return Object.entries(testCenters)
    .map(([name, center]) => ({
      name,
      ...center,
      distance: calculateDistance(userPostcode, center.postcode)
    }))
    .sort((a, b) => (a.distance || 0) - (b.distance || 0));
};

module.exports = {
  getAllTestCenters,
  searchTestCentersByPostcode
}; 