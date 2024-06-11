import { useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";


const initialCartItems = [
    // {
    //     product: {},
    //     quantity: 0,
    //     total: 0

    // }
];
export const CartApp = () => {

    //Estados
    const [cartItems, setCartItems] = useState(initialCartItems);
    //Efectos

    //Funciones
    const handlerAddProductCart = (product) => {
        const hasItem=cartItems.find((i) => i.product.id === product.id);
        console.log(cartItems);
        if (hasItem) {
            setCartItems(
                cartItems.map((i) => {
                    if(i.id === product.id){
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
            )
            
        } else {
            setCartItems([...cartItems,
            {
                id: product.id,
                product,
                quantity: 1,
                total: product.price * product.quantity,
            }
            ]);
        }
    }

    return (
        <>

            <div className="container">
                <CatalogView handler={handlerAddProductCart} />


                <div className="my-4 w-50">
                    <CartView items={cartItems} />
                </div>
            </div>
        </>
    )
}
