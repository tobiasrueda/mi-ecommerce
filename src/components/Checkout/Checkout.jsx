import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./checkout.css";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: ""
  });
  const [orderId, setOrderId] = useState(null);
  const { cart, totalPrice } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  }

  const sendOrder = (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice()
    }

    //subimos la orden a firestore
    uploadOrder(order);
  }

  const uploadOrder = async (order) => {
    try {
      const orderRef = collection(db, "orders");
      const response = await addDoc(orderRef, order);

      setOrderId(response.id);
    } catch (error) {
      console.log("Error al subir la orden");
    }
  }

  return (
    <div className="checkout">
      {
        orderId ? (
          <div>
            <h2>Orden generada correctamente!</h2>
            <p>guarde el identificador de su orden: {orderId}</p>
          </div>
        ) : (
          <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} sendOrder={sendOrder} />
        )
      }
    </div>
  )
}

export default Checkout