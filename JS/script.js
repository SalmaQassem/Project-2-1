const cards = document.querySelectorAll(".card-container");
const speackIcon = document.querySelectorAll(".icon.sound");
window.addEventListener("load", () => {
  cards.forEach((card) => {
    card.classList.add("show");
  });
});
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    card.classList.add("is-flipped");
    const cardId = card.dataset.id;
    const icons = document.querySelectorAll(
      `.icons[data-id="${cardId}"] .icon`
    );
    icons.forEach((icon) => {
      icon.style.visibility = "visible";
      icon.classList.add("show");
      icon.addEventListener("animationend", () => {
        icon.classList.remove("show");
      });
    });
  });
});
speackIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.add("clicked");
    icon.addEventListener("animationend", () => {
      icon.classList.remove("clicked");
    });
  });
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".modal-wrapper").classList.add("hide");
  document.querySelector(".modal-wrapper").addEventListener("animationend",()=>{
    document.querySelector(".overlay").style.visibility = "hidden";
    document.querySelector(".modal-wrapper").style.visibility = "hidden";
  })
});
