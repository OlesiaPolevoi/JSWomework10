"use strict";
const books = document.querySelectorAll(".book");

books[0].before(books[1]);

books[3].before(books[4]);

books[5].after(books[2]);

document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

const book3 = document.querySelectorAll("h2 > a");
book3[2].textContent = "Книга 3. this и Прототипы Объектов";

const ad = document.querySelector(".adv");
ad.classList.remove("adv");

const book2Uls = document.querySelectorAll(".book > ul");
const book2Li = book2Uls[1].querySelectorAll("li");

book2Uls[1].append(
  book2Li[0],
  book2Li[1],
  book2Li[3],
  book2Li[6],
  book2Li[8],
  book2Li[4],
  book2Li[5],
  book2Li[7],
  book2Li[9],
  book2Li[2],
  book2Li[10]
);

const book5Li = book2Uls[4].querySelectorAll("li");

book2Uls[4].append(
  book5Li[0],
  book5Li[1],
  book5Li[9],
  book5Li[3],
  book5Li[4],
  book5Li[2],
  book5Li[6],
  book5Li[7],
  book5Li[5],
  book5Li[8],
  book5Li[10]
);

const newElem = document.createElement("li");
newElem.textContent = "Глава 8: За пределами ES6";

book2Uls[5].append(newElem);

const book6Li = book2Uls[5].querySelectorAll("li");

book2Uls[5].append(book6Li[9]);
