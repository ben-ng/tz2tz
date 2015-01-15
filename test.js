var test = require('tape')
  , z = require('./')

test('tz2tz', function (t) {
  t.plan(5)

  t.equal(z(1421330745258, 'America/Los_Angeles', 'ddd MMM D'), 'Thu Jan 15')
  t.equal(z.d(1421330745258, 'America/Los_Angeles'), 'Thu Jan 15')
  t.equal(z.t(1421330745258, 'America/Los_Angeles'), '6:05AM')
  t.equal(z.f(1421330745258, 'America/Los_Angeles'), 'Thu, Jan 15, 2015 6:05 AM')

  z.constants.timeFormat = 'h:mm a'
  t.equal(z.t(1421330745258, 'America/Los_Angeles'), '6:05 am')
})