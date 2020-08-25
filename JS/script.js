'use strict';

const chuckSays = document.getElementById("chuckSays");
const button = document.getElementById("button");
const quoteBox = document.querySelector("makeQuote");

(function () {
    const url = "https://api.chucknorris.io/jokes/random"
    get(url).then(function (fetchResponse) {
        chuckSays.innerHTML = fetchResponse.value;
    })

})();
