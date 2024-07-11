import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart"));

export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems || [] )
    //Efectos
    // useEffect(
    //     ()=>{
    //         if(cartItems.length===0) sessionStorage.removeItem('cart');
    //     }
    //     ,[cartItems]
    // )

     useEffect(
        () => {
            sessionStorage.setItem("cart", JSON.stringify(cartItems));
        },
        [cartItems]
    )


    //Funciones
    //Añadir pruductos al carrito
    const handlerAddProductCart = (product) => {
        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );
            // setCartItems(
            //     cartItems.map((i) => {
            //         if (i.id === product.id) {
            //             i.quantity = i.quantity + 1;
            //         }
            //         return i;
            //     })
            // )

        } else {
            dispatch(
                {
                    type: AddProductCart,
                    payload: product,
                }
            );
            // setCartItems([...cartItems,
            // {
            //     id: product.id,
            //     product,
            //     quantity: 1,
            //     total: product.price * product.quantity,
            // }
            // ]);
        }
    }
    //Borrar productos del carrito
    const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                type: DeleteProductCart,
                payload: id,

            }
        )
        // setCartItems(cartItems.filter(i => i.id !== id));

    }
    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart
    }
}