const buttonElement = document.querySelector(".jsBtn");

function subscribe() {
  if (buttonElement.innerHTML === "Subscribe") {
    buttonElement.innerText = "Subscribed";
    buttonElement.classList.add('is-suscribed')
  } else {
    buttonElement.innerText = "Subscribe";
    buttonElement.classList.remove('is-suscribed')
  }
  
}


