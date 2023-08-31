const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const buttons = document.querySelectorAll(".btn")

buttons.forEach((button) => {
  button.addEventListener("click", handleClick)
})

document.addEventListener("keydown", handleEnterReset)

function handleEnterReset(e) {
  if (e.key === "Enter" && screen1.classList.contains("hide")) {
    handleClick()
  }
}

function handleClick() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
