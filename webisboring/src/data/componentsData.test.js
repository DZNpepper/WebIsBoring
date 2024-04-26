import componentsData from './componentsData'; 

describe('componentsData', () => {
  // Check if componentsData is an array
  test('should be an array', () => {
    // Expect componentsData to be an array
    expect(Array.isArray(componentsData)).toBe(true);
  });

  // Check if each item in componentsData has specific properties
  test('should contain objects with specific properties', () => {
    componentsData.forEach(item => {
      // Expect each item to have specific properties
      expect(item).toHaveProperty('id');
      expect(item).toHaveProperty('name');
      expect(item).toHaveProperty('description');
      expect(item).toHaveProperty('image');
      expect(item).toHaveProperty('unlocked');
    });
  });

  // Check if all properties of each item in componentsData are of correct type
  test('should have all properties of the correct type', () => {
    componentsData.forEach(item => {
      // Expect each property of item to be of correct type
      expect(typeof item.id).toBe('string');
      expect(typeof item.name).toBe('string');
      expect(typeof item.description).toBe('string');
      expect(item.image).toBeTruthy();  
      expect(typeof item.unlocked).toBe('boolean');
    });
  });

  // Check if each item in componentsData has a valid id
  test('should have valid ids for each component', () => {
    // Valid ids for components
    const validIds = ['pc-case', 'motherboard', 'cpu', 'gpu', 'ram', 'psu', 'hdd', 'ssd'];
    componentsData.forEach(item => {
      // Expect each item's id to be included in validIds
      expect(validIds).toContain(item.id);
    });
  });

})
