
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";





export const CartApp = () => {

    //Estados
    // const [cartItems, setCartItems] = useState(initialCartItems || []);
    //Reducer
   

    const {cartItems, handlerAddProductCart, handlerDeleteProductCart} = useItemsCart();


    return (
        <>

            <div className="container my-4">
                <CatalogView handler={handlerAddProductCart} />

                {
                    cartItems?.length ? (
                        <div className="my-4 w-50">
                            <CartView items={cartItems} handler={handlerDeleteProductCart} />
                        </div>
                    ) : false
                }

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
