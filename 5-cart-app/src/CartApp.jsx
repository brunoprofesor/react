import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { products } from "./data/products";


export const CartApp = () => {

    //Estados

    //Efectos


    //Funciones


    return (
        <>

            <div className="container">

                <h3>Cart App</h3>
                <CatalogView />

                <div className="my-4 w-50">
                    <CartView />
                </div>
            </div>
        </>
    )
}
