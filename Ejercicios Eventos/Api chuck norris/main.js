// script.js
import "nes.css/css/nes.min.css";
// consumible api
const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  fetch("https://api.chucknorris.io/jokes/random", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));