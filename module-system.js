/*
-- THE COMMONJS MODULE SYSTEM   

* Node.js uses the CommonJS module System : require(),exports or module.exports 
* Each JavaScript file is treated as a separate module.
* ES module system is used in browsers : import/export;
* There have been attempts to bring ES modules to node.js(.mjs).
* There are three types of modules core-modules, developer-modules, 3rd-party modules.

* How Node Decides which module to load?
-- Start with core modules.
-- If begins with './' or '../' ,try to load developer module.
-- If no file found then try to find folder with index.js in it.
-- Else go to node_modules/ and try to find module there.


-- What happens when we Require() a module ?

Resolving & Loading --> Wrapping --> Execution --> Returning Exports --> Caching

1. After resolving and loading the request the modules code is wrapped(WRAPPING) into special function which will give us
access to couple of special objects.

(function(exports,require,module,__filename,__dirname){
    // Module code lives here..

# require -- function to require modules
# modules -- reference to current module.
# exports -- a reference to module.exports, used to export object from a module.
# __filename -- absolute path of current module's file;
# __dirname -- directory name of the current module.  

});

2. The code in the module's wrapper function actually gets executed by the NODE.JS runtime.

3. require function returns exports of the required module. module.exports is the returned object

4. the last step is to cache the modules it means that if we require the same module multiple times we will get the same results.

*/