import { createContext, useState } from "react";

//creamos nuestro contexto para el carrito
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductInCart = (product) => {
    //tarea
    // 1 - mediante un condicional detectar si el producto ya esta en el carrito
    // 2 - si el producto esta en el carrito, sumar sus cantidades, sino agregarlo como nuevo
    setCart( [ ...cart, product ] );
  };

  const totalQuantity = () => {
    const total = cart.reduce((total, product) => total + product.quantity, 0);
    return total;
  };

  const totalPrice = () => {
    const total = cart.reduce((total, product)=> total + ( product.price * product.quantity ), 0);
    return total;
  }

  const deleteProductById = (id) => {
    const productsFilter = cart.filter((product)=> product.id !== id );
    setCart(productsFilter);
  }

  //deleteAllProducts - Borrar todos los productos

  console.log(cart)

  return(
    <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById } }>
      {children}
    </CartContext.Provider>
  )
};

export { CartContext, CartProvider };