
import { Navigate, Route, Routes } from "react-router-dom";
// import { CartView } from "./components/CartView";
// import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";
import { NavBar } from "./components/NavBar";
import { CartRoutes } from "./routes/CartRoutes";





export const CartApp = () => {

    //Estados
    // const [cartItems, setCartItems] = useState(initialCartItems || []);
    //Reducer

    //hooks
    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();


    return (
        <>
            <NavBar />
            <div className="container my-4">

                <h3>Carrito de la Compra App</h3>
                <CartRoutes
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                />




                {/* {
                    cartItems?.length <= 0 || (
                        <div className="my-4 w-50">
                            <CartView items={cartItems} handler={handlerDeleteProductCart} />
                        </div>
                        )
                        // console.log(cartItems.length);
                    
                } */}




            </div>
        </>
    )
}
