const express = require('express');
const server = express();

server.post('central', (req, res)=>{
    
});

server.listen(3000, ()=>{
    console.log('Server on port 3000');
});