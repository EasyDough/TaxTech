let counter = 0;

const onClickDecrease = () => {
   if(counter > 0) {
      counter--;
   }
   document.getElementById('numberValue').innerHTML = counter;
}

const onClickIncrease = () => {
   if(counter < 20) {
      counter++;
   }
   document.getElementById('numberValue').innerHTML = counter;
}

const onClickStepTwoButton = () => {
   location.href = "./secondQuestion.html";
}

document.getElementById("minusButton").addEventListener("click", onClickDecrease);
document.getElementById("plusButton").addEventListener("click", onClickIncrease);

document.getElementById("stepTwoButton").addEventListener("click", onClickStepTwoButton);
