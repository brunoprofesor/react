import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = ({handler}) => {
 //Estados
 const [products, setProducts] = useState([]);

 //Efectos
 useEffect(
     () => {
         setProducts(getProducts());
     },
     []
 )


  return (
    <>
      <h3>Carrito de la Compra App</h3>
      <div className="row">
        {products.map(({ id, name, description, price }) => (

          <div className="col-4 my-2" key={id}>
           <ProductCardView
              id={id}
              name={name} 
              description={description} 
              price={price}
              handler= {handler}/>
          </div>

        ))}
      </div>
    </>
  )
}
