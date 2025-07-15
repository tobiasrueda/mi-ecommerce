import { useEffect, useState } from "react"
import { getProducts } from "../data/products.js";

const useProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    setLoading(true);

    getProducts()
      .then((data)=> {
        if(category){
          //filtrar la data por esa categoria
          const productsFilter = data.filter((product)=> product.category === category );
          setProducts(productsFilter);
        }else{
          //guardamos toda la data
          setProducts(data);
        }
      })
      .finally(()=> {
        setLoading(false);
      })

  }, [category])

  return { products, loading };
};

export default useProducts;