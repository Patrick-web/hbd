setTimeout(() => {
  document.querySelectorAll(".script").forEach((script) => {
    document.body.classList.add("showHBD");
  });
  var confettiElement = document.getElementById("confetti");
  var confettiSettings = { target: confettiElement };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}, 28000);
setTimeout(() => {
  document.body.click();
  document.querySelector("audio").play();
}, 25000);

document.body.addEventListener("click", () => {
  document.querySelector("audio").play();
});
