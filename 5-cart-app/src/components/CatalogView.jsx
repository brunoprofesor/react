import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";

export const CatalogView = () => {
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
      <div className="row">
        {products.map(({ id, name, description, price }) => (

          <div className="col-4 my-2" key={id}>
           <ProductCardView
              name={name} 
              description={description} 
              price={price}/>
          </div>

        ))}
      </div>
    </>
  )
}
