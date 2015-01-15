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
z.d(timestamp, 'America/Los_Angeles') // Uses 'ddd MMM D' as format e.g. Thu Jan 15
z.t(timestamp, 'America/Los_Angeles') // Uses 'h:mmA' as format e.g. 6:05AM

// Change the shorthand constants
z.constants.timeFormat = 'h:mm a'
```

## Is That All?

Yeah that's it. But seriously, if you had to do this hundreds of times, you would want something like this too.

