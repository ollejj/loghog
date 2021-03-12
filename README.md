# loghog.js

WORK IN PROGRESS

## Installation
`npm install loghog`

## Example
```js
const express = require('express');
const app = express();

app.use(loghog({
    path: './events.txt'
}));

/*
You can also use:
*/
app.use(loghog());
/*
to output directly to Console
*/
```

## Author
Olle Johansson
https://github.com/ollejj