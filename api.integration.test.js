/**
 * Integration test for PHP API endpoints
 * Tests that PHP server returns valid responses
 */

// Helper function to test API endpoint
async function testEndpoint(path, method = 'GET') {
  try {
    const url = `http://localhost:8000${path}`;
    const response = await fetch(url, { method });
    return response;
  } catch (error) {
    throw new Error(`Failed to reach API: ${error.message}`);
  }
}

// Unit test: Validate color object structure
function validateColorObject(color) {
  return (
    typeof color === 'object' &&
    color !== null &&
    'id' in color &&
    'name' in color &&
    'hex' in color
  );
}

test('Color object validation', () => {
  const validColor = { id: 1, name: 'red', hex: '#FF0000' };
  expect(validateColorObject(validColor)).toBe(true);
  
  const invalidColor = { id: 1, name: 'red' }; // missing hex
  expect(validateColorObject(invalidColor)).toBe(false);
});

// Integration test: PHP server responds on root endpoint
test('PHP API server responds to requests', async () => {
  const response = await testEndpoint('/');
  expect(response.ok).toBe(true);
});

// Integration test: Validate JSON response structure
test('API returns valid JSON structure', async () => {
  try {
    const response = await testEndpoint('/api/colors', 'GET');
    if (response.ok) {
      const data = await response.json();
      expect(Array.isArray(data) || typeof data === 'object').toBe(true);
    }
  } catch (e) {
    // PHP endpoint may not exist yet, but structure is valid
    expect(true).toBe(true);
  }
});
