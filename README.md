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

//You can also use the following code to output directly to the console.
app.use(loghog());
```

## Output
```
2021-03-14, 21:31:07 -> GET: /getCustomers
2021-03-14, 21:31:49 -> POST: /addCustomer?name=John&password=Doe
2021-03-14, 21:32:45 -> DELETE: /deleteCustomer?id=1
2021-03-14, 21:33:04 -> PUT: /changeCustomer?id=1&name=Joe
```

## Options


## Author
Olle Johansson
https://github.com/ollejj