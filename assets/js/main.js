var items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    removeActive();
    item.classList.add("active");
  });
});

const removeActive = () => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
};
