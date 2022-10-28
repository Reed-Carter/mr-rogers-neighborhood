//Business Logic
function mrRogers (inputNumber) {
  let numberArray = [0]
  for (let i = 0; i < inputNumber; i += 1) {
    numberArray.push(numberArray[i] + 1);
  }

  let stringArray = []
  for (const element of numberArray) {
    const stringNumber = element.toString();
    if (stringNumber.includes("3")) {
      stringArray.push("Won't you be my neighbor");
    }
    else if (stringNumber.includes("2")) {
      stringArray.push("Boop!");
    }
    else if (stringNumber.includes("1")) {
      stringArray.push("Beep!");
    }
    else {
      stringArray.push(stringNumber);
    }
  }
 return stringArray;
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