const moment = require('moment-timezone');

const convertToTimeZone = (date, timeZone) => {
  return moment(date).tz(timeZone).format();
};

module.exports = convertToTimeZone;