const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");
const productsContainer = document.querySelector(".productsContainer");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const menuBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".todoInfo");

//carrusel

//recorremos todos los punto
punto.forEach((cadaPunto, i) => {
  //le damos un click a cada punto
  cadaPunto.addEventListener("click", () => {
    //guardamos la posicion del punto y calculamos el espacio que tiene que reemplazar el grande
    let operacion = i * -50;

    //movemos el grande
    grande.style.transform = `translateX(${operacion}%)`;

    //recorremos todos los puntos
    punto.forEach((cadaPunto, j) => {
      //quitamos la clase activo a los punto
      punto[j].classList.remove("activo");
    });

    //añadir la clase en el evento que hicimos click
    cadaPunto.classList.add("activo");
  });
});

//funcion generadora para cada card

const createProductTemplate = (news) => {
  const { id, name, userImg, cardImg } = news;
  return `
    <div class="product">
      <img src="${cardImg}" alt="${name}" />
      <div class="product-info">
        <div class="product-top">
          <h3>${name}</h3>
          <p>Oferta actual</p>
        </div>
        <div class="product-mid">
          <div class="product-user">
            <img src="${userImg}" alt="usuario" />
            <p>${user}</p>
          </div>
        </div>
        <div class="product-bot">
          <div class="product-offer">
            <div class="offer-time">
              <img src="./assets/img/fire.png" alt="" />
              <p>05:12:07</p>
            </div>
            <button class="btn-add"
              data-id="${id}"
              data-name="${name}"
              data-bid="${bid}"
              data-img="${cardImg}">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  `;
};

const renderProducts = (productsList) => {
  const productsContainer = document.querySelector(".productsContainer");
  productsContainer.innerHTML += productsList
    .map(createProductTemplate)
    .join("");
};
