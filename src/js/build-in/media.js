export default function app() {
  console.log('test2')
  const buttons = document.querySelectorAll(".media__filter-btn");
  const cards = document.querySelectorAll(".card");
  var btn1 = document.getElementById("loadMore");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
      if (isShowAll) {
        // item.classList.add("hide");
        btn1.style.display = "block";
        for (let i = 7; i < box.length; i++) {
          item.classList.add("hide");
        }
      } else {
        // item.classList.remove("hide");
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
    });
  });

}