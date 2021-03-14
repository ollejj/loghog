# loghog.js

A very simple package to assist your API-request logging needs!

## Installation
`npm install loghog`

## Example
```js
const express = require('express');
const app = express();

app.use(loghog({
    path: './log.txt'
}));

//You can also use:
app.use(loghog());
//to output directly to the console.
```

## Author
Olle Johansson
https://github.com/ollejj