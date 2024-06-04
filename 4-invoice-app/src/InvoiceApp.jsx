import { useEffect, useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        name: '',
        lastName: '',
        address: {
            country: '',
            city: '',
            street: '',
            number: 0
        }
    },
    company: {
        name: '',
        fiscalNumber: 0,
    },
    items: []
};

export const InvoiceApp = () => {
    //Estados
    const [invoice, setInvoice] = useState(invoiceInitial); //Factura

    const [items, setItems] = useState([]); //Items de la factura

    const [formItemsState, setFormItemsState] = useState({ //Formulario
        product: '',
        price: '',
        quantity: '',
    });
   
    const [counter, setCounter] = useState(0); //contador de items

    const [total, setTotal] = useState(0); //Total de la factura

    //Desectructuración
    const {  id, name, client, company} = invoice;
    const { product, price, quantity } = formItemsState;

    //Efectos
    useEffect(() => {
        const data = getInvoice();
        // console.log(data);
        setInvoice(data);
        setItems(data.items);
        setCounter(data.items.length+1);
        setTotal(data.items
            .map(item => item.price * item.quantity)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    }, []); //se dispara una sola vez cuando se crea el componente por []

    useEffect( () => {
        // console.log('el precio cambio');
    },[price]); // se dispara cada vez que se cambia el estado de precio

    useEffect( () => {
        // console.log('el formItemsState cambio');
    },[formItemsState]); // se dispara cada vez que se cambia el estado de algun campo del formulario

    useEffect( () => {
        // console.log('el counter cambio');
    },[counter]); // se dispara cada vez que se cambia el estado del contador

    useEffect( () => {
        //Actualiazmos el total
        // console.log('Se alteraron los items');
        setTotal(items
            .map(item => item.price * item.quantity)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0));
    },[items]); // se dispara cada vez que se cambia el estado de los items

    //UseEffect esta relaciona con UseStae

 

    const onInputChange = ({ target: { name, value } }) => {
        // console.log(name);
        // console.log(value);

        setFormItemsState({
            ...formItemsState,
            [ name ]: value
        });
    }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault();

        if (product.trim().length <= 1) return;
        if (price.trim().length <= 1) return;
        if (isNaN(price.trim())) {
            alert('Error la precio no es un numero')
            return;
        }
        if (quantity.trim().length < 1) {
            alert('Error la cantidad tiene que ser mayor a 0')
            return;
        }
        if (isNaN(quantity.trim())) {
            alert('Error la cantidad no es un numero')
            return;
        }

        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: +quantity.trim(),
        }]);

        setFormItemsState({
            product: '',
            price: '',
            quantity: '',
        });
        setCounter(counter + 1);
    }

    return (
        <>
            <div className="container">

                <div className="card my-3">

                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={ id } name={ name } />

                        <div className="row my-3">

                            <div className="col">
                                <ClientView title="Datos del cliente" client={client} />
                            </div>

                            <div className="col">
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>

                        </div>

                        <ListItemsView title="Productos de la factura" items={items} />
                        <TotalView total={total} />
                        <form className="w-50" onSubmit={ onInvoiceItemsSubmit }>
                            <input
                                type="text"
                                name="product"
                                value={ product }
                                placeholder="Producto"
                                className="form-control m-3"
                                onChange={onInputChange} />
                            <input
                                type="text"
                                name="price"
                                value={ price }
                                placeholder="Precio"
                                className="form-control m-3"
                                onChange={event => onInputChange(event)} />
                            <input
                                type="text"
                                name="quantity"
                                value={ quantity }
                                placeholder="Cantidad"
                                className="form-control m-3"
                                onChange={onInputChange} />
                            
                            <button
                                type="submit"
                                className="btn btn-primary m-3">
                                Nuevo Item
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}