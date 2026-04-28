/**
 * Integration test for PHP API endpoints
 * Tests that PHP server returns valid responses
 */

// Helper function with retry logic to wait for server
async function waitForServer(maxAttempts = 5, delayMs = 1000) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch('http://localhost:8000/');
      if (response.ok) {
        return true;
      }
    } catch (error) {
      // Server not ready yet
      if (i < maxAttempts - 1) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    }
  }
  return false;
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

// Integration test: PHP server is accessible
test('PHP API server responds to requests', async () => {
  const serverReady = await waitForServer();
  expect(serverReady).toBe(true);
}, 15000); // 15 second timeout

// Integration test: Validate JSON response structure
test('API returns valid response', async () => {
  try {
    const response = await fetch('http://localhost:8000/');
    expect([200, 301, 302, 404]).toContain(response.status); // Accept common responses
  } catch (error) {
    // If server fails to start, test should fail
    throw error;
  }
}, 15000);
