const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");
const productsContainer = document.querySelector(".productsContainer");
const categories = document.querySelector(".categories");
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

const createProductTemplate = (news, user) => {
  const { id, name, userImg, cardImg } = news;
  return `
    <div class="product">
      
      <div class="product-info">
        <div class="product-top">
          <h3>${name}</h3>
          <img src="${cardImg}" alt="${name}"/>
        </div>
            <button class="btn-add"
              data-id="${id}"
              data-name="${name}"
              data-img="${cardImg}">❤️</button>
          </div>
        </div>
      </div>
    </div>
  `;
};

const renderProducts = (productsList) => {
  const productsContainer = document.querySelector(".productsContainer");
  productsContainer.innerHTML = productsList
    .map(createProductTemplate)
    .join("");
};
renderProducts(productsData);

const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
};

const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

const applyFilter = (event) => {
  const { target } = event;
  if (!isInactiveFilterBtn(target)) return;
  productsContainer.innerHTML = "";

  changeFilterState(target);
  if (appState.activeFilter) {
    renderFilteredProducts(appState.activeFilter);
    appState.currentProductsIndex = 0;
    return;
  }

  renderProducts(appState.products[0]);
};

const renderFilteredProducts = (selectedCategory) => {
  const filteredProducts = productsData.filter(
    (product) => product.category === selectedCategory
  );
  renderProducts(filteredProducts);
};

categories.addEventListener("click", applyFilter);
function divideProductsInParts(products, chunkSize) {
  const dividedProducts = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    dividedProducts.push(products.slice(i, i + chunkSize));
  }
  return dividedProducts;
}
