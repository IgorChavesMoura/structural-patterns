injectHttpInterceptor();

import http from 'http';

import { injectHttpInterceptor } from './../index.js';

function handleRequest(req, res) {

    // res.setHeader('X-Instrumented-By', 'IgorMoura');

    res.end('Hello world!');

}

const server = http.createServer(handleRequest);
const port = 3000;

server.listen(port, () => console.log(`Server running on port ${port}`));
