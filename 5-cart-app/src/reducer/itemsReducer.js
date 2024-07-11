import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case AddProductCart:
          return [...state,
            {
                product: action.payload,
                quantity: 1,
                total: action.payload.price * action.payload.quantity,
            }
            ];
        case UpdateQuantityProductCart:
          return state.map((i) => {
            if (i.product.id === action.payload.id) {
              //React es inmutable por lo que debemos devolver 
              //un nuevo objeto con la actualiación que queramos
                return {
                  ...i,
                  quantity: i.quantity +1,
                }
            }
            return i;
        });
        case DeleteProductCart:
          return state.filter(i => i.product.id !== action.payload);
       
        default:
          return state;
      }
}