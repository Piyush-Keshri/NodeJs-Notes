// What does Node.js do?
/*
* Node.js is a javaScript Runtime built on google's open source V8 JavaScript Engine.
* Node.js is just like a container,like an enviornment,in which a program written in JavaScript can be executed but outside of any browser whatsoever.
* In Node.js standalone enviornment we can do many more things with JavaScript like accessing file systems or better network capabilities.
* Using Node.js we can use JavaScript on the server side of web development to build fast ,highly scalable network applications(back-end).

// Why to use Node.js

* Node.js is single-threaded ,based on event driven,non-blocking I/O model which makes NodeJs very lightweight and efficient.
* Node.js is perfect for building fast and scalable data-intensive web applications.
* Companies like NETFLIX,UBER,PAYPAL,EBAY have started using Node in production.
* Very Active developer community.

// When to use Node.js

* To bulid APIs with Database behind it(preferably NoSQL).
* For Data Streaming(Eg: Youtube);
* Real-time Chat Application.
* Server-Side Web Application. 


// WHAT HAPPENS WHEN WE ACCESS A WEBPAGE

Our browser which is also called a client  sends a request to the server where the webpage is hosted and the server will then
send back a response which will contain the webpage that we requested.
This process is called the request-response model or Client-Server Architecture.

https://www.google.com/maps  -->  https://216.58.211.206:443

https is the protocol.                216.58.211.206 is the IP address
google.com is the domain name         443 is the port number.
maps is resource.

DNS --> Domain Name Servers  are like the phonebook of the internet.
TCP --> Transmission Control Protocols
IP --> Internet Protocols
HTTP --> HyperText Transfer Protocol.

* TCP/IP together are communication protocols that define exactly how data trvels across the web.
* HTTP is also a communication protocol that allows clients and web servers to communicate by sending request and response messages
 from client to server and back

1.The first step that happens when we open up a website is that the browser makes a request to the DNS and then DNS will then simply
match the web address that we typed in the browser to the server's real IP address and this happens through our ISP.

2. After we have the correct address a TCP/IP socket connection is established between the client and the server and the connection
is alive between the browser and the server till all the files of the website are transferred.

3. HTTP request to the server.

4. HTTP response from the server.

*/