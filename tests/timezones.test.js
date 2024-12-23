const convertToTimeZone = require('../utils/timezones');

test('converts date to timezone', () => {
  const date = new Date();
  const timeZone = 'America/New_York';
  const convertedDate = convertToTimeZone(date, timeZone);
  expect(convertedDate).toBeDefined();
});