var moment = require('moment-timezone')

function tz2tz (timestamp, timezone, format) {
  if(typeof timestamp == 'object') {
    if(isNaN(timestamp.getHours()))
      throw new Error('Invalid date object: ' + timestamp)
    else
      timestamp = timestamp.valueOf()
  }

  if(typeof timestamp != 'number' || Number.isNaN(timestamp) || timestamp < 0)
    throw new Error('Invalid timestamp: ' + JSON.stringify(timestamp))

  if(typeof timezone != 'string')
    throw new Error('Timezone must be a string, got: ' + JSON.stringify(timezone))

  if(moment.tz.zone(timezone) == null)
    throw new Error('The timezone does not exist or has not been loaded: ' + JSON.stringify(timezone))

  return moment.tz(timestamp, timezone).tz(timezone).format(format)
}

tz2tz.constants = {
  dateFormat: 'ddd MMM D'
, timeFormat: 'h:mmA'
, fullFormat: 'llll'
, shortFormat: 'h:mmA M/D/YY'
, dayFormat: 'dddd'
}

tz2tz.getDate = function tz2tz_date (timestamp, timezone) {
  return tz2tz(timestamp, timezone, tz2tz.constants.dateFormat)
}

tz2tz.getTime = function tz2tz_time (timestamp, timezone) {
  return tz2tz(timestamp, timezone, tz2tz.constants.timeFormat)
}

tz2tz.getShort = function tz2tz_short (timestamp, timezone) {
  return tz2tz(timestamp, timezone, tz2tz.constants.shortFormat)
}

tz2tz.getFull = function tz2tz_full (timestamp, timezone) {
  return tz2tz(timestamp, timezone, tz2tz.constants.fullFormat)
}

tz2tz.getDay = function tz2tz_day (timestamp, timezone) {
  return tz2tz(timestamp, timezone, tz2tz.constants.dayFormat)
}

module.exports = tz2tz
