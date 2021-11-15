// 6. Creating a http server

const http = require('http');

const app = http.createServer((req, res) => {
    res.end("Greetings from Vikash Pareek!");
});

app.listen(3000, () => {
    console.log("The server is running on port 3000...");
});