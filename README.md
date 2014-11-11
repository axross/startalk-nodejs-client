# startalk-nodejs-client

[Startalk](http://startalk.trifort.jp/) Node.js client.

[![npm version](https://badge.fury.io/js/startalk.svg)](http://badge.fury.io/js/startalk)

## Installation

Use on npm:

```
npm install startalk --save
```

## API

### new Startalk(roomId, uuid)

Generate startalk client instance.

#### Startalk#post(text, callback(err, res){ })

Post text to room.
