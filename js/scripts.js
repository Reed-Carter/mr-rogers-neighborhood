//Business Logic
function mrRogers (number) {
  let numberArray = [0]
  for (let i = 0; i < number; i += 1) {
    numberArray.push(numberArray[i] + 1);
  };
  return numberArray;
}





// UI Logic