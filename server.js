const http = require('http');

const server=http.createServer((req,res) => {
    console.log(req.url);
    res.end('Hello from node. Js');
});
server.listen(3000, () => {
    console.log('Server running on port 3000');
});
const express = require('express');
const app = express();
app.get('/',(req,res)=> {
    res.send('Hello from node.Js');
});
app.get('/contact',(req,res)=>{
    res.send('The contact paage');
});
app.get('/about',(req,res)=>{
    res.send('The about paage');
});
const PORT=3000;
app.listen(PORT,()=> {
    console.log(`server rnning on port ${PORT}`)
});