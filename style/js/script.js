
let time = document.querySelector(".time");
let subtime = document.querySelector(".subtime");

setInterval(function(){
let date = new Date();
console.log(date);

let oylar = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentyabr",
  "Oktyabr",
  "Noyabr",
  "Dekabr",
];

let haftalar = [
  "Dushanbe",
  "Seshanbe",
  "Chorshanbe",
  "Payshanbe",
  "Juma",
  "Shanbe",
  "Yakshanbe",
];

let year = date.getFullYear();
let month = date.getMonth();
let week = date.getDay() -1;
let day = date.getDate();
let hours = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let millisecond = date.getMilliseconds();

time.innerHTML = `${hours < 10 ? "0" + hours : hours}:${minute < 10 ? "0" + minute : minute}:${
  second < 10 ? "0" + second : second} ${hours > 12 ? "PM" : "AM"}`;

  subtime.innerHTML = `${haftalar[week]}, ${day} - ${oylar[month]}. ${year}`

})