/*

As Node.js is single threaded so the execution happens in the following way

Initialise Program --> Execute "top-level" code --> Require Modules --> Register Event Callbacks --> Start Event Loop

* Event Loop
# All the application code that is inside callback functions(non-top-top-level code)
# Node.js is built around callback functions 
# Event-driven Architecture
    -- Events are Emitted.
    -- Event Loops picks them up.
    -- Callbacks are called.
    -- Event loop does orchestration.

--Working of Node.js
 
When we start our node application the event loop starts running right away.The event loop has multiple phases and each phase
has a callback queue which are callbacks coming from the events that the event loop recieves

The 4 phases of event loops

Start --> Expired Timer CallBacks --> I/O polling and callbacks --> setImmediate Callbacks --> Close Callbacks

Expired timer callbacks -- It takes care of the callbacks of expired timers. So if there are callback functions from timers that 
                           just expired these are the first ones to be processed by the event loop.

I/O polling and callbacks -- Polling means looking for new I/O events that are ready to be processed and putiing them in the callback
                            queue.I/O means mainly stuff like networking and file access and in this phase 99% of our code gets executed.

setImmediate callbacks -- It is a special type of timer that we can use if we want to process callbacks immediately after the I/O polling and 
                          callbacks  phase.
                
Close Callbacks -- In this phase all close events are processed.

The event loop is what makes asynchronous programming possible in Node.js making it the most important feature in Node's design and making Node.js
completly differnt from other platforms.

Measures that should be taken to not block the Event Loop

1.Do not use synchronous versions of functions in fs,crypto and zlib modules in your callback functions.
2.Do not perform complex calculations (eg: loops inside loops)
3.Be careful with JSON in large objects.
4.Do not use too complex regular expressions(eg:nested quantifiers) 

*/