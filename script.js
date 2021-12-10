"use strict";
const books = document.querySelectorAll(".book");

books[0].before(books[1]);

books[3].before(books[4]);

books[5].after(books[2]);

document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
