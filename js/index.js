import { API_Key_NASA } from "./credentials.js";

const nasaCall = () => {
  const randomNumber = Math.floor(Math.random() * 30);

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_Key_NASA}&date=2023-01-${randomNumber}`
  )
    .then((response) => response.json())
    // .then((json) => console.log(json))
    .then((data) => {
      const template = `
          <p class='APOD-paragraph'>${data.explanation}</p>
          <img class='APOD-image' src=${data.hdurl}   />

      `;

      document.body.querySelector("#APOD-main").innerHTML = template;

  
    });
};

const gtn = document.querySelector("#gtn");

gtn.addEventListener("click", (event) => {
  event.preventDefault();
  nasaCall();
});
