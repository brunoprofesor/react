import { useState, useEffect } from "react";
import { calculateTotal } from '../services/productService'


export const CartView = ({ items, handler, handlerChange }) => {
    //Estados
    const [total, setTotal] = useState(0);

    //Efectos
    useEffect(
        () => {
            setTotal(
                calculateTotal(items)
                )
        },
        [items]
    )

    //Funciones
    const onDeleteItem = (id) => {
        handler(id);
    }

   
    // 
    return (
        <>
            <h3>Carro de compras</h3>
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item =>
                        <tr key={item.product.id}>
                            <td>{item.product.name}</td>
                            <td>{item.product.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.product.price * item.quantity}</td>
                            <td><button
                                className="btn btn-danger"
                                onClick={() => onDeleteItem(item.product.id)}
                            >Eliminar</button></td>
                        </tr>
                    )}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3} className="text-end fw-bold">Total</td>
                        <td colSpan={2} className="text-strat fw-bold">{total}</td>
                    </tr>

                </tfoot>
            </table>
        </>
    )
}
