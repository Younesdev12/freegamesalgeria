
window.onload = function(){ 

  var input = document.getElementById("search-text");
  
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("search-button").click();
    }
  });
  document.getElementById("search-button").onclick = function() {
      var searchingWord = document.getElementById("search-text").value;
      if (searchingWord == "Fortnite" || searchingWord == "fortnite") {
        window.open("#", "_self")
      }
      if (searchingWord == " ".trim()) {
        alert("Write something first!", "_self")
      }      
      else {
        alert("Oops , didn't find the word you're looking for :(");
    
      }
    }
  };
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://actual-free-games.p.rapidapi.com/free-games',
  params: {order: 'ASC'},
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'actual-free-games.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});