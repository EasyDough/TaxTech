let selectedButton = null;

const selectButton = (button) => {
   if (selectedButton !== null) {
         selectedButton.classList.remove("selected");
   }

   selectedButton = button;
   selectedButton.classList.add("selected");
}

selectButton(document.getElementById("firstButton"));

const buttons = document.getElementsByClassName("radioButton");
for (const button of buttons) {
   button.addEventListener("click", () => {
         selectButton(button);
   });
}
