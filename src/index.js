const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/calculate/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 + num2;
    res.send(`The result of ${num1} + ${num2} is ${result}`);
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})
