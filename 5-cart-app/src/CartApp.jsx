import { useEffect, useState } from "react";
import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { products } from "./data/products";


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
    //Añadir pruductos al carrito
    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            setCartItems(
                cartItems.map((i) => {
                    if (i.id === product.id) {
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
    //Borrar productos del carrito
    const handlerDeleteProductCart = (id) => {
        setCartItems(cartItems.filter(i => i.id !== id));
    }

    


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
