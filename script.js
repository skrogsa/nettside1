function darkLightMode() {
    let toggleButton = document.querySelector("#toggleButton");
    console.log(toggleButton);
    let body = document.querySelector("body");
    console.log(body);

    body.classList.toggle("dark");
}

toggleButton.addEventListener("click", darkLightMode);