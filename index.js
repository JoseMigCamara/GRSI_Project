const { response } = require('express');
const express = require('express');
const { request } = require('http');
const path = require('path');
const app = express();


app.use(express.static('./SITE'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname,('./SITE/index.html')))
});

const port = 3000;
app.listen(port, () => {
    console.log('App listening on port ' + port);
});
