
// WORKING CODE= 

// ****THE FINAL SPACE API  
// My code made by ME (using Asyc/Await)

//   async function getCharacters() {
//     const response = await axios.get(
//       "https://finalspaceapi.com/api/v0/character/?limit=3"
//     );
//          console.log('Using Asyn Await')
//          console.log(response.data);
//     const img1 = document.getElementById('img1');
//     const img2 = document.getElementById('img2');
//     const img3 = document.getElementById('img3');
//     const name1 = document.getElementById('name1')
//     const name2 = document.getElementById('name2')
//     const name3 = document.getElementById('name3')
//     const hab1 = document.getElementById('hab1')
//     const hab2 = document.getElementById('hab2')
//     const hab3 = document.getElementById('hab3')


//     img1.src = response.data[0].img_url;
//     img2.src = response.data[1].img_url;
//     img3.src = response.data[2].img_url;

//     name1.innerText =  response.data [0].name
//     name2.innerText =  response.data [1].name
//     name3.innerText =  response.data [2].name

//     hab1.innerText = 'from: ' + response.data [0].origin
//     hab2.innerText = 'from: ' + response.data [1].origin
//     hab3.innerText = 'from: ' + response.data [2].origin


//   }
// getCharacters();



// *********THE MOVIE API 
// https://api.themoviedb.org/3/movie/popular?api_key=ffa0fae7f69282c547ad54561958cbbd 
// My CODE= 


// async function getCharacters() {
//     const response = await axios.get(
//       "https://api.themoviedb.org/3/movie/popular?api_key=ffa0fae7f69282c547ad54561958cbbd"
//     );
//          console.log('Response here bellow:')
//          console.log(response.data.results);
//     // const img1 = document.getElementById('img1');
//     // const img2 = document.getElementById('img2');
//     // const img3 = document.getElementById('img3');
//     // const name1 = document.getElementById('name1')
//     // const name2 = document.getElementById('name2')
//     // const name3 = document.getElementById('name3')
//     // const hab1 = document.getElementById('hab1')
//     // const hab2 = document.getElementById('hab2')
//     // const hab3 = document.getElementById('hab3')

//     const movieImagePath = 'https://image.tmdb.org/t/p/w300'

//     img1.src = movieImagePath + response.data.results[0].poster_path ;
//     img2.src = movieImagePath + response.data.results[1].poster_path  ;
//     img3.src = movieImagePath + response.data.results[2].poster_path ;

//     // // name1.innerText =  response.data [0].name
//     // // name2.innerText =  response.data [1].name
//     // // name3.innerText =  response.data [2].name


//     //    hab1.innerText = movieImagePath + response.data.results[0].poster_path

//     // hab2.innerText = 'from: ' + response.data [1].origin
//     // hab3.innerText = 'from: ' + response.data [2].origin


//   }
// getCharacters();



// ***********NASA API
// // API KEY for NASA API = zSGBVey0wM0oMWT7aVaiXBkqVleU17BV0hAmj8qs
// here my code:


// async function getCharacters() {
//   const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=zSGBVey0wM0oMWT7aVaiXBkqVleU17BV0hAmj8qs');
//        console.log('Response here bellow:')
//        console.log(response.data);
//   // const img1 = document.getElementById('img1');
//   // const img2 = document.getElementById('img2');
//   // const img3 = document.getElementById('img3');
//   // const name1 = document.getElementById('name1')
//   // const name2 = document.getElementById('name2')
//   // const name3 = document.getElementById('name3')
//   // const hab1 = document.getElementById('hab1')
//   // const hab2 = document.getElementById('hab2')
//   // const hab3 = document.getElementById('hab3')

//   const movieImagePath = 'https://image.tmdb.org/t/p/w300'

//   img1.src = response.data.url ;
//   img2.src = response.data.url ;
//   img3.src = response.data.url ;

//   name1.innerText =  response.data.explanation
//   name2.innerText =  response.data.explanation
//   name3.innerText =  response.data.explanation


//   //    hab1.innerText = movieImagePath + response.data.results[0].poster_path

//   // hab2.innerText = 'from: ' + response.data [1].origin
//   // hab3.innerText = 'from: ' + response.data [2].origin


// }
// getCharacters();






// NOT WORKING 401--ERROR: no permission from server 
//  UPLOAD request
// https://api.themoviedb.org/3/list?api_key=ffa0fae7f69282c547ad54561958cbbd




// async function postList() { 
//    try {
//     const url = 'https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=ffa0fae7f69282c547ad54561958cbbd';
//     const data = { 
//       media_type: "movie",
//       media_id: 550,
//       favorite: true
//     };
//     const config = { 'content-type': 'application/json' };


//     const response = await axios.post(url, data, config);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// postList();

// // Axios GET Default
axios
  .get("https://finalspaceapi.com/api/v0/character/?limit=3")
  .then( function (response) {
    console.log ('using GET default - FINAL SPACE API')
    console.log(response);
  });





// // GET -- Using Asyc/Await --THIS CODE WORKS
async function getCharacters() {
    const response = await axios.get(
      "https://finalspaceapi.com/api/v0/character/?limit=2"
    );
        console.log('Using Asyn Await')
         console.log(response.data);
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    img1.src = response.data[0].img_url;
    img2.src = response.data[1].img_url;

  }
  getCharacters();

  
// GET -  USING API KEY 


NASA_API_KEY = 'zSGBVey0wM0oMWT7aVaiXBkqVleU17BV0hAmj8qs'
axios
  .get(
    `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
  )
  .then((response) => {
    console.log ('NASA API=')
    console.log(response.data);
  });


//   Error handling

axios
  .get("https://rickandmortyapi.com/api/character/1")
  .then((response) => {
    console.log ('RICK AND MORT API')
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });


// *********************








// ----------------AXIOS Documentation


const api = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-API-KEY': '_________'},
  });


const axios = require('axios').default;

// axios.<method> will now provide autocomplete and parameter typings

const axios = require('axios');

//  *****************************************GET REQUEST *******************************
//  Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


// GET request for remote image in node.js
axios({
    method: 'get',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream'
  })
    .then(function (response) {
      response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });

// When using then, you will receive the response as follows:


    axios.get('/user/12345')
    .then(function (response) {
      console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
      console.log(response.config);
    });





//****************** */ POST REQUEST **************************

axios.post(url, data, config)

// As you can see, it takes these three parameters.

// url: The URL of the API endpoint.
// data: Object storing the data being sent to the API.
// config: Object which contains the header information.


try {
	const url = 'https://rapidapi.com/learn/api/rest';
	const data = { firstName: 'John', secondName: 'Doe', email: 'jd@gmail.com' };
  const config = { 'content-type': 'application/json' };

	const response = await axios.post(url, data, config);
	console.log(response.data);
} catch (error) {
	console.error(error);
}






// post

  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  // Send a POST request
axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });




//   ****************RESPONSE SCHEMA**********************

{
    // // `data` is the response that was provided by the server
    //   data: {},
  
    // // `status` is the HTTP status code from the server response
    //   status: 200,
  
    // // `statusText` is the HTTP status message from the server response
    // // As of HTTP/2 status text is blank or unsupported.
    // // (HTTP/2 RFC: https://www.rfc-editor.org/rfc/rfc7540#section-8.1.2.4)
    // statusText: 'OK',
  
    // // `headers` the HTTP headers that the server responded with
    // // All header names are lower cased and can be accessed using the bracket notation.
    // // Example: `response.headers['content-type']`
    // headers: {},
  
    // // `config` is the config that was provided to `axios` for the request
    // config: {},
  
    // // `request` is the request that generated this response
    // // It is the last ClientRequest instance in node.js (in redirects)
    // // and an XMLHttpRequest instance in the browser
    // request: {}
  }