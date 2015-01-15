var moment = require('moment-timezone')

function tz2tz (timestamp, timezone, format) {
  if(typeof timestamp != 'number' || Number.isNaN(timestamp) || timestamp < 0)
    throw new Error('Invalid timestamp: ' + JSON.stringify(timestamp))

  if(typeof timezone != 'string')
    throw new Error('Timezone must be a string')

  if(moment.tz.zone(timezone) == null)
    throw new Error('The timezone does not exist or has not been loaded: ' + JSON.stringify(timezone))

  return moment.tz(timestamp, timezone).tz(timezone).format(format)
}

tz2tz.constants = {
  dateFormat: 'ddd MMM D'
, timeFormat: 'h:mmA'
, fullFormat: 'llll'
}

tz2tz.d = function tz2tz_date (timestamp, timezone) {
  return tz2tz(timestamp, timezone, tz2tz.constants.dateFormat)
}

tz2tz.t = function tz2tz_time (timestamp, timezone) {
  return tz2tz(timestamp, timezone, tz2tz.constants.timeFormat)
}

tz2tz.f = function tz2tz_full (timestamp, timezone) {
  return tz2tz(timestamp, timezone, tz2tz.constants.fullFormat)
}

module.exports = tz2tz
