/* Tidligere forsøk på toggle knapp */
/* const buttonImage = document.getElementById("buttonImage");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function() {
  if (buttonImage.src.endsWith("images/night-mode.png")) {
    buttonImage.src = "images/brightness.png";
  } else {
    buttonImage.src = "images/night-mode.png";
  }
}); */


//Funksjon som gjør at siden automatisk blir til mørk modus etter kl 18. 
// Mørk modus funksjon
function darkMode() {
    let body = document.querySelector("body");
    console.log(body);

    body.classList.add("dark");

    let header = document.querySelector("header");
    console.log(header);

    header.classList.add("darktwo");

    let h1 = document.querySelector("h1");
    console.log(h1);

    h1.classList.add("darkthree");

    toggleButton.classList.add("darkfour");
}

let intervalId;

// Sjekke tid funksjon - hvis tid kl. 18, så mørk modus funksjon
function checkTime() {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  if (hours >= 18 && minutes >= 0) {
      darkMode();
  }
}

// Funksjon som gjør at en kan endre fra lys til mørk modus ved å klikke på knapp

function darkLightMode() {
  let toggleButton = document.querySelector("#toggleButton");
  console.log(toggleButton);
  let body = document.querySelector("body");
  console.log(body);

  body.classList.toggle("dark");

  let header = document.querySelector("header");
  console.log(header);

  header.classList.toggle("darktwo");

  let h1 = document.querySelector("h1");
  console.log(h1);

  h1.classList.toggle("darkthree");

  toggleButton.classList.toggle("darkfour");
}

toggleButton.addEventListener("click", darkLightMode);

// Funksjonen sjekker tiden hvert sekund
intervalId = setInterval(checkTime, 1000);

// Funksjon som gjør at siden ikke endrer seg tilbake til dark mode automatisk hvis en bruker toggle
toggleButton.addEventListener("click", function() {
  clearInterval(intervalId);
});
