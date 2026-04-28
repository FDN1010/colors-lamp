function formatColor(color) {
  return color.trim().toLowerCase();
}

test('formats color correctly', () => {
  expect(formatColor('  RED ')).toBe('red');
});
