var test = require('tape')
  , z = require('./')

test('tz2tz', function (t) {
  t.plan(11)

  t.equal(z(new Date(1421330745258), 'America/Los_Angeles', 'ddd MMM D'), 'Thu Jan 15 PST')
  t.equal(z(1421330745258, 'America/Los_Angeles', 'ddd MMM D'), 'Thu Jan 15 PST')
  t.equal(z.getDate(1421330745258, 'America/Los_Angeles'), 'Thu Jan 15')
  t.equal(z.getTime(1421330745258, 'America/Los_Angeles'), '6:05AM PST')
  t.equal(z.getFull(1421330745258, 'America/Los_Angeles'), 'Thu, Jan 15, 2015 6:05 AM PST')
  t.equal(z.getShort(1421330745258, 'America/Los_Angeles'), '6:05AM 1/15/15 PST')

  t.equal(z.getDay(1421330745258, 'America/Los_Angeles'), 'Thursday')

  t.strictEqual(z.getHours(1421330745258, 'America/Los_Angeles'), 6)
  t.strictEqual(z.getMinutes(1421330745258, 'America/Los_Angeles'), 5)

  z.constants.timeFormat = 'h:mm a'
  t.equal(z.getTime(1421330745258, 'America/Los_Angeles'), '6:05 am PST')

  t.equal(z.getTime(1421330745258, 'America/Los_Angeles', {showTz: false}), '6:05 am')
})
