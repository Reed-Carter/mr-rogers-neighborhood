//Business Logic
function mrRogers (inputNumber) {
  let numberArray = [0]
  for (let i = 0; i <= inputNumber - 1; i += 1) {
    numberArray.push(numberArray[i] + 1);
  };
    numberArray.splice(numberArray.indexOf(1), 1, "Beep!");
  return numberArray;
}





// UI Logic

function handleForm(event) {
  event.preventDefault();
  const inputNumber = document.getElementById("userInput").value;
  let outputText = mrRogers(inputNumber);
  document.getElementById("output").append(outputText);
  document.getElementById("output").append(document.createElement("br"));

}

window.addEventListener ("load", function () {
  document.querySelector("form#mrRogers").addEventListener("submit", handleForm);
});