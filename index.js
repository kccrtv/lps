const gameChoices = ["lapis", "papyrus", "scalpellus"];
const numberOfWeaponButtons = document.querySelectorAll(".btn").length;
const results = document.getElementById("win");
const body = document.firstElementChild.lastElementChild;
const randomNumber = Math.floor(Math.random() * 3);

playGame();

function playGame() {
  const randomCompChoice = gameChoices[randomNumber];
  for (let i = 0; i < numberOfWeaponButtons; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function() {
      let weaponChoice = this.innerHTML;

      document.getElementById("you").innerText = weaponChoice;
      console.log("YOU: " + weaponChoice);
      document.getElementById("comp").innerText = randomCompChoice;
      console.log("COMPUTER: " + randomCompChoice);

      if (weaponChoice === "lapis" && randomCompChoice === "scalpellus") {
        results.innerText = "You win! Lapis beats Scalpellus!";
        won();
      } else if (weaponChoice === "scalpellus" && randomCompChoice === "lapis") {
        results.innerText = "Ahh, the computer won. Lapis beats Scalpellus!";
        lost();
      } else if (weaponChoice === "papyrus" && randomCompChoice === "lapis") {
        results.innerText = "You win! Papyrus beats Lapis!";
        won();
      } else if (weaponChoice === "lapis" && randomCompChoice === "papyrus") {
        results.innerText = "Ahh, the computer won. Papyrus beats Lapis!";
        lost();
      } else if (weaponChoice === "scalpellus" && randomCompChoice === "papyrus") {
        results.innerText = "You win! Scalpellus beats Papyrus!";
        won();
      } else if (weaponChoice === "papyrus" && randomCompChoice === "scalpellus") {
        results.innerText = "Ahh, the computer won. Scalpellus beats Papyrus!";
        lost();
      } else {
        results.innerText = "It's a draw. Try again.";
      }
    });
  }
}

function won() {
  body.classList.add("game-won");
  reload();
}

function lost() {
  body.classList.add("game-over");
  reload();
}

function reload() {
  setTimeout(function() {
    window.location.reload(1);
  }, 2000);
}
