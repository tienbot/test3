// передать данные из базы данных
import { data as art } from "./data.js";

// рендер карточки
renderCard(art);

// передать данные из бд в карточки
function renderCard(data) {
  data.forEach((el) => {
    creareCard(el);
  });
}

// отобразить карточки на странице
function creareCard(obj) {
  const container = document.querySelector(".catalogArt"); //создали карточку

  const card = document.querySelector("article");
  card.className = "card";

  // создаем картинку
  const img = document.createElement("img");
  img.setAttribute("src", obj.image);

  // создаем текст блок
  let textContent1 = document.querySelector("div");
  textContent1.className = "textContent1";

  // добавляем информаци. в текстовой блок
  textContent1.innerHTML = `
  
        <p class="card__author">${obj.artist}</p>
          <h3 class="card__title"> ${obj.title} </h3>
          <p class="card__material">${obj.material}(40х60)</p>
          <p id="price" class="card__price">${obj.price} </p>
          `;

  container.append(card); //выводим карточку
  card.append(img, textContent1);
}

// <button class="card__btn">${obj.card__btn}</button>
