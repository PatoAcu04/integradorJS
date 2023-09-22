const productsData = [
  {
    id: 1,
    name: "Boca se impone por penales (4 a 2) ante racing y pasa a la semifinal de la copa libertadores",
    informacion: "boca gana de local por 1 a 0",
    category: "deportes",
    cardImg:
      "imagenes noticias/boca_vs_racing_crop1621285881099.png_1159711837.png",
  },
  {
    id: 2,
    name: "Milei hace historia y rompe el record en la plataforma de elon musk del video más visto en la historia de `X`",
    category: "politica",
    cardImg: "imagenes noticias/6507698c69111__400x300.webp",
  },
  {
    id: 3,
    name: "Unity pide disculpas por su nueva tasa y anuncia cambios en sus políticas",
    category: "videojuegos",
    cardImg: "imagenes noticias/-1x-1.jpg",
  },
  {
    id: 4,
    name: "Rockstar Games celebra el 10 aniversario de Grand Theft Auto V con un anuncio que decepciona a los fans",
    category: "videojuegos",
    cardImg: "imagenes noticias/202391411453680_1.jpg",
  },
  {
    id: 5,
    name: "El proyecto de Bombonera Isla Demarchi ya está en la Legislatura",
    category: "deportes",
    cardImg: "imagenes noticias/la-nueva-bombonera_862x485.webp",
  },
  {
    id: 6,
    name: 'El Manchester City de Pep Guardiola comienza la defensa de su título en la Champions League frente al "Estrella Roja" ',
    category: "deportes",
    cardImg: "imagenes noticias/7ZJTTCBPKFDVVBYQNEIHKGN5BM.avif",
  },
  {
    id: 7,
    name: "Red Dead Redemption 2 tendrá versión para PS5 y Xbox Series, según la filtración de Xbox",
    category: "videojuegos",
    cardImg: "imagenes noticias/sin-titulo-1-1-5.webp",
  },
  {
    id: 8,
    name: "Tensión en Chaco cuando Bullrich quiso entrar al barrio Emerenciano Sena",
    category: "politica",
    cardImg: "imagenes noticias/patricia-bullrich-en-chaco-1656331.jpg",
  },
  {
    id: 9,
    name: "Según últimas encuestas, Milei va primero en las elecciones, seguido por Sergio Massa y Patricia Bullrich respectivamente",
    category: "politica",
    cardImg: "imagenes noticias/650557ece9ff71583333ab14.jpg",
  },
];

const appState = {
  products: divideProductsInParts(6),
  currentProductsIndex: 0,
  productsLimit: divideProductsInParts(6).lenght,
  activeFilter: null,
};
