const http=require('http');

const server=http.createServer((req,res)=>{
    res.end('helo');
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('listening to the port');
})
