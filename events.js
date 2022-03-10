const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter{
    constructor(){
        super(); //By running super() we get access of all the methods of the parent class.
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale',() => {
    console.log('There was a new Sale!');
});

myEmitter.on('newSale',() => {
    console.log('Customer name: Piyush');
})

myEmitter.on('newSale', stock => {
    console.log(`There are ${stock} items left in stock.`)
})

myEmitter.emit('newSale',9);

//---------------------------------------------------------------------//

const server = http.createServer();

server.on('request',(req,res) => {
    console.log('Request recieved');
    res.end('Request recieved')
});

server.on('request',(req,res) => {
    console.log('Another request 😂');
});

server.on('close',() => {
    console.log('Server closed');
});

server.listen(8000,'127.0.0.1',() => {
    console.log('Waiting for requests...')
})