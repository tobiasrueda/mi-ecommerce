const products = [
  {
    id: 1,
    name: "Remera Jordan Jumpman",
    description: "La remera Jordan Jumpman es una prenda deportiva de estilo urbano, reconocida por su diseño cómodo y versátil. Suele estar confeccionada en algodón suave y presenta el icónico logo **Jumpman**, símbolo representativo de la marca Jordan, inspirado en Michael Jordan. Es ideal tanto para el uso diario como para complementar outfits deportivos con un toque clásico y moderno.",
    price: 80,
    stock: 5,
    image: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2e7cfaa6/products/NI_CJ0921-687/NI_CJ0921-687-1.JPG",
    category: "remeras"
  },
  {
    id: 2,
    name: "Remera Nike SB",
    description: "La remera Nike SB está diseñada para skaters y para quienes buscan comodidad y estilo casual. Generalmente fabricada en algodón suave, destaca por su corte relajado y el logo Nike SB, que representa la línea de skateboarding de Nike. Es una prenda versátil, perfecta para el uso diario o para practicar deporte con libertad de movimiento.",
    price: 50,
    stock: 10,
    image: "https://chelseaio.vtexassets.com/arquivos/ids/518235-800-auto?v=638574388865630000&width=800&height=auto&aspect=true",
    category: "remeras"
  },
  {
    id: 3,
    name: "Campera Adidas SST",
    description: "La campera Adidas SST es un clásico del estilo deportivo urbano. Confeccionada en tejido suave y liviano, se reconoce por sus icónicas tres tiras en las mangas y el logo Trefoil en el pecho. Inspirada en las chaquetas de entrenamiento vintage, ofrece un look retro combinado con comodidad y versatilidad para el día a día.",
    price: 130,
    stock: 2,
    image: "https://production.cdn.vaypol.com/variants/9g0stiqkcgrbwc0w7umc9k371xit/e82c8d6171dd25bb538f2e7263b5bc7dfc6a79352d85923074be76df53fbc6f4",
    category: "camperas"
  },
  {
    id: 4,
    name: "Campera Nike Tech",
    description: "La campera Nike Tech combina tecnología y diseño moderno. Fabricada con materiales ligeros y de alto rendimiento, brinda abrigo sin perder movilidad. Su diseño minimalista, con cortes ergonómicos y bolsillos funcionales, la convierte en una prenda ideal tanto para el uso urbano como para entrenar con estilo y confort.",
    price: 200,
    stock: 7,
    image: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfbf7fc6a/products/NIFB7921-010/NIFB7921-010-1.JPG",
    category: "camperas"
  },
  {
    id: 5,
    name: "Pantalon Nike Swoosh",
    description: "El pantalón Nike Swoosh ofrece un estilo deportivo y relajado, ideal para el día a día. Está confeccionado con materiales suaves y cómodos, y se destaca por llevar el logo Swoosh, un ícono de la marca. Su diseño moderno incluye cintura ajustable y bolsillos funcionales, perfecto para combinar con looks urbanos o deportivos.",
    price: 160,
    stock: 1,
    image: "https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfaa8453b/products/NIDX0564-011/NIDX0564-011-1.JPG",
    category: "pantalones"
  },
  {
    id: 6,
    name: "Pantalon Puma BMW Motorsport",
    description: "El pantalón Puma BMW Motorsport combina comodidad y estilo con un diseño inspirado en el automovilismo. Fabricado en materiales suaves y resistentes, se destaca por los detalles y logos oficiales de BMW M Motorsport, que le dan un toque deportivo y exclusivo. Es ideal para quienes buscan un look urbano con identidad racing.",
    price: 120,
    stock: 19,
    image: "https://celadasa.vtexassets.com/arquivos/ids/456825-800-auto?v=638735888199870000&width=800&height=auto&aspect=true",
    category: "pantalones"
  }
];

const getProducts = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve(products);
    }, 3000);

  });
};

const getProductById = (productId) => {
  return new Promise((resolve, reject)=> {

    setTimeout(()=> {
      //filtrar la lista de productos y traerme solo 1 a traves de su id
      const product = products.find((product)=> product.id === Number(productId) );
      resolve(product);
    }, 3000);

  });
};

export { getProducts, getProductById };