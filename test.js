var test = require('tape')
  , z = require('./')

test('tz2tz', function (t) {
  t.plan(8)

  t.equal(z(new Date(1421330745258), 'America/Los_Angeles', 'ddd MMM D'), 'Thu Jan 15')
  t.equal(z(1421330745258, 'America/Los_Angeles', 'ddd MMM D'), 'Thu Jan 15')
  t.equal(z.getDate(1421330745258, 'America/Los_Angeles'), 'Thu Jan 15')
  t.equal(z.getTime(1421330745258, 'America/Los_Angeles'), '6:05AM')
  t.equal(z.getFull(1421330745258, 'America/Los_Angeles'), 'Thu, Jan 15, 2015 6:05 AM')
  t.equal(z.getShort(1421330745258, 'America/Los_Angeles'), '6:05AM 1/15/15')

  t.equal(z.getDay(1421330745258, 'America/Los_Angeles'), 'Thursday')

  z.constants.timeFormat = 'h:mm a'
  t.equal(z.getTime(1421330745258, 'America/Los_Angeles'), '6:05 am')
})
