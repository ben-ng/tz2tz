[![Build Status](https://travis-ci.org/ben-ng/tz2tz.svg?branch=master)](https://travis-ci.org/ben-ng/tz2tz)

## Disclaimer

Honestly I'm just writing this so that I can require it without relative file paths in my projects.

If you find it useful, great. Otherwise, like all open-source software, expect zero support.

I will happily merge PRs though :)

## API

```js
// I recommend 'z' because 't' is a common temp var name
var z = require('tz2tz')
  , timestamp = Date.now()

// Parse the timestamp in the timezone then output it in the moment-style format specified
z(timestamp, 'America/Los_Angeles', 'ddd MMM D')

// Shorthandy goodness

// d for "date" e.g. Thu Jan 15
// Uses 'ddd MMM D' as format
z.getDate(timestamp, 'America/Los_Angeles')

// t for "time" e.g. 6:05AM
// Uses 'h:mmA' as format
z.getTime(timestamp, 'America/Los_Angeles')

// s for "short" e.g. 6:05AM 1/15/15
z.getShort(timestamp, 'America/Los_Angeles')

// f for "full" e.g. Thu, Jan 15, 2015 6:05 AM
// Uses preferred locale format
z.getFull(timestamp, 'America/Los_Angeles')

// day e.g. Thursday
z.getDay(timestamp, 'America/Los_Angeles')

// Change the shorthand constants
z.constants.timeFormat = 'h:mm a'
```

## Is That All?

Yeah that's it. But seriously, if you had to do this hundreds of times, you would want something like this too.

