const sizeInput = document.querySelector("#font-size-control");
const textOutput = document.querySelector("#text");

const sizeControl = () => {
  textOutput.style.fontSize = sizeInput.value + "px";
};
sizeInput.addEventListener("input", sizeControl);
