declare module '../../../testCenters' {
  interface TestCenter {
    address: string;
    city: string;
    county: string;
    postcode: string;
    availableSlots: number;
  }

  const testCenters: { [key: string]: TestCenter };
  export default testCenters;
} 