import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const Cart = () => {
  const { cart, totalPrice, deleteProductById } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de compras</h2>
      {
        cart.map((productCart)=> (
          <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
            <img src={productCart.image} alt="" width={200} />
            <p>{productCart.name}</p>
            <p>c/u: ${productCart.price}</p>
            <p>cantidad: {productCart.quantity}</p>
            <p>precio parcial: ${productCart.price * productCart.quantity}</p>
            <button onClick={ () => deleteProductById(productCart.id) } >Eliminar</button>
          </div>
        ))
      }

      <p>Precio total: ${totalPrice()}</p>
    </div>
  )
}

export default Cart