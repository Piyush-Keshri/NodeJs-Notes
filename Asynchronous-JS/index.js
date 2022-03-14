const fs = require('fs');
const superagent = require('superagent');

// CallBack Hell

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed : ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         console.log('Random dog image saved to File!');
//       });
//     });
// });

/*
* get() -- get method returns a promise

#Promise -- 
A promise Basically implements the concept of a future Value. A value which we are expecting to recieve some time in the future.
The get method that we use again will automatically and immediately return a promise as soon as we start the request.
The Promise doesnot have a value yet as the server is actually still getting the data from the server asynchronously in the background,
but the promise is immediately available and basically promising us that it will get some data back in the future.

A Promise as soon as it comes back with the data is called a resolved Promise. In the beginning its a pending Promise and when it 
succesfully gets the data it is then a resolved promise.
A resolved promise might not be always succesfull as there might have been an error.So a resolved promise can either be fullfilled or rejected.
The fullfilled Promises are handled by the then() method and rejected promises are handles by catch() method.

*/

// Using then()
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  console.log(`Breed : ${data}`);

  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then((res) => {
      console.log(res.body.message);

      fs.writeFile('dog-img.txt', res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log('Random dog image saved to file!');
      });
    }).catch(err => console.log(err));
});
