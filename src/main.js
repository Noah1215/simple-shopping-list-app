const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");
const form = document.querySelector(".new__form");

function onAdd() {
  const text = input.value;

  if (text === "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);

  item.scrollIntoView({ block: "center" });
  input.value = "";
  input.focus();
}

// V1
// function createItem(text) {
//   const itemRow = document.createElement("li");
//   itemRow.setAttribute("class", "item__row");

//   const item = document.createElement("div");
//   item.setAttribute("class", "item");

//   const span = document.createElement("span");
//   span.setAttribute("class", "item__name");
//   span.innerText = text;

//   const deleteBtn = document.createElement("button");
//   deleteBtn.setAttribute("class", "item__delete");
//   deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`;

//   deleteBtn.addEventListener("click", () => {
//     items.removeChild(itemRow);
//   });

//   const itemDivider = document.createElement("div");
//   itemDivider.setAttribute("class", "item__divider");

//   item.appendChild(span);
//   item.appendChild(deleteBtn);

//   itemRow.appendChild(item);
//   itemRow.appendChild(itemDivider);

//   return itemRow;
// }

function createItem(text) {
  const dataId = Date.now();
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", dataId);
  itemRow.innerHTML = `
        <div class="item">
          <span class="item__name">${text}</span>
          <button class="item__delete">
            <i class="fa-sharp fa-solid fa-trash" data-id=${dataId}></i>
          </button>
        </div>
        <div class="item__divider"></div>
  `;

  return itemRow;
}

//V1
// addBtn.addEventListener("click", () => {
//   onAdd();
// });

// input.addEventListener("keydown", (event) => {
//   if (event.isComposing) {
//     return;
//   }
//   if (event.key === "Enter") {
//     onAdd();
//   }
// });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onAdd();
});

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id='${id}']`);
    toBeDeleted.remove();
  }
});
