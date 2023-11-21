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

/* const buttonImage = document.getElementById("buttonImage");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function() {
  if (buttonImage.src.endsWith("images/night-mode.png")) {
    buttonImage.src = "images/brightness.png";
  } else {
    buttonImage.src = "images/night-mode.png";
  }
}); */