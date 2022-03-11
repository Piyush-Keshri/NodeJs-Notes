/*
STREAMS

Streams are Instances of the Event Emitter Class.

With streams we can process meaning read or write data piece by piece without completing the whole read or write operation.
Therefore we donot have to keep all the data in memory to do these operations.

For example Youtube and Netflix are streaming services we can see a part of the video without downloading the whole file.

Advantages:-

1.Perfect for handling large volume of data,for example videos ar data that we recieve piece by piece from external sources.

2.More Efficient data processing in terms of memory and time.As we do not have keep all data in memory and we donot have to wait 
until all the data is available.

Types of Streams

1.Readable Streams --

Readable streams are those streams from which we can read or consume data.Eg:- http requests,fs read streams.
In case of readable streams they can emit and we can listen to many different events.But the most important two are the data and end events.
The data event is emitted when there is a new piece of data to consume and the end is emitted as soon as there is no more data to consume.
Important functions of readable streams are pipe() and read().

2.Writeable Streams --

Writable streams are those streams in which we can write data. Eg:- http responses, fs write streams.
Important events include drain and finish.
Immportant Methods include write() and end().

3.Duplex Streams --

Duplex Streams are those streams that are both readable and writable at the same time. Eg:- net web socket.

4. Transform Streams --

Transform streams are duplex streams that transform data as it is written or read. 

#BackPressure -- It is a real problem that can happen in real situations.BackPressure happens when readable stream is much much much faster
                than actually sending the result with the response writable stream over the network.This will overwhelm the response stream 
                which cannot handle all this incoming data so fast.

*/
const fs = require('fs');
const server = require('http').createServer();

server.on('request',(req,res) => {
    
    // Solution 1 
    // Here the problem is that the file is read as a whole, which is not very efficient.

    // fs.readFile('test-file.txt',(err,data) => {
    //     if(err) console.log(err);
    //     res.end(data);
    // });

    // Solution 2 :Streams
    // Here we are streaming the test-file.txt, so we read one piece of the file as soon as that's available,we send it right 
    // to the client,using write method of the response stream.Then when the next piece is available we send it right to the client,
    // using the write method of the response stream.

    // Here the problem is BackPressure.

    // const readable = fs.createReadStream('test-file.txt');
    // readable.on('data',chunk => {
    //     res.write(chunk);
    // });

    // readable.on('end',() => {
    //     res.end();
    // });

    // readable.on('error',err => {
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end('File Not Found')
    // });

    // Solution 3
    // To avoid Backpressure we use the pipe method and it allows us to pipe the output of a readable stream
    // right into the input of writable stream.

    // Syntax -- readableSource.pipe(writableDestination);

    const readable = fs.createReadStream('test-file.txt');
    readable.pipe(res);
    
});

server.listen(8000,'127.0.0.1',() => {
    console.log("Listening...");
});
