import { products } from '../data/products'

export const getProducts = () => {
    return products;
}

export const calculateTotal = (items) => {
    return items.reduce((accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.product.price,
        0,);
}