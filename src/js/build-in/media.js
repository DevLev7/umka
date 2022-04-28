export default function app() {
    const buttons = document.querySelectorAll(".media__filter-btn");
    const cards = document.querySelectorAll(".card");
  
    function filter(category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category);
        const isShowAll = category.toLowerCase() === "all";
        if (isItemFiltered && !isShowAll) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
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