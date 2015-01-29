var moment = require('moment-timezone')
  , defaults = require('lodash.defaults')

function tz2tz (timestamp, timezone, format, opts) {
  var converted
  opts = opts || {}

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

  converted = moment.tz(timestamp, timezone).tz(timezone)

  return converted.format(format) + (opts.showTz === false ? '' : ' ' + converted.format('z'))
}

tz2tz.constants = {
  dateFormat: 'ddd MMM D'
, timeFormat: 'h:mmA'
, fullFormat: 'llll'
, shortFormat: 'h:mmA M/D/YY'
, dayFormat: 'dddd'
}

tz2tz.getDate = function tz2tz_date (timestamp, timezone, opts) {
  opts = defaults(opts || {}, {showTz: false})
  return tz2tz(timestamp, timezone, tz2tz.constants.dateFormat, opts)
}

tz2tz.getTime = function tz2tz_time (timestamp, timezone, opts) {
  return tz2tz(timestamp, timezone, tz2tz.constants.timeFormat, opts)
}

tz2tz.getShort = function tz2tz_short (timestamp, timezone, opts) {
  return tz2tz(timestamp, timezone, tz2tz.constants.shortFormat, opts)
}

tz2tz.getFull = function tz2tz_full (timestamp, timezone, opts) {
  return tz2tz(timestamp, timezone, tz2tz.constants.fullFormat, opts)
}

tz2tz.getDay = function tz2tz_day (timestamp, timezone, opts) {
  opts = defaults(opts || {}, {showTz: false})
  return tz2tz(timestamp, timezone, tz2tz.constants.dayFormat, opts)
}

tz2tz.getHours = function tz2tz_hours (timestamp, timezone) {
  return parseInt(tz2tz(timestamp, timezone, 'H', {showTz: false}), 10)
}

tz2tz.getMinutes = function tz2tz_minutes (timestamp, timezone) {
  return parseInt(tz2tz(timestamp, timezone, 'm', {showTz: false}), 10)
}

module.exports = tz2tz
