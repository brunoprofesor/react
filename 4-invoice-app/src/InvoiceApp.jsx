import { useEffect, useState } from "react";
import { getInvoice, calculateTotal } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";
import { FormItemsView } from "./components/FormItemsView";

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

    const [counter, setCounter] = useState(0); //contador de items

    const [total, setTotal] = useState(0); //Total de la factura

    const [activeForm, setActiveForm] = useState(false);

    //Desectructuración
    const { id, name, client, company } = invoice;


    //Efectos
    useEffect(() => {
        const data = getInvoice();
        // console.log(data);
        setInvoice(data);
        setItems(data.items);
        setCounter(data.items.length + 1);
        setTotal(calculateTotal(items));
    }, []); //se dispara una sola vez cuando se crea el componente por []

    useEffect(() => {
        // console.log('el counter cambio');
    }, [counter]); // se dispara cada vez que se cambia el estado del contador

    useEffect(() => {
        //Actualiazmos el total
        // console.log('Se alteraron los items');
        setTotal(calculateTotal(items));
    }, [items]); // se dispara cada vez que se cambia el estado de los items

    //UseEffect esta relaciona con UseStae


    //Funciones
    const handlerAddItems = ({ product, price, quantity }) => {
        setItems([...items, {
            id: counter,
            product: product.trim(),
            price: +price.trim(),
            quantity: +quantity.trim(),
        }]);
        setCounter(counter + 1);
    }

    const handlerRemoveItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    const onActiveForm = ({ name, target }) => {
        setActiveForm(!activeForm);
        target.n
    }

    return (
        <>
            <div className="container">

                <div className="card my-3">

                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={id} name={name} />

                        <div className="row my-3">

                            <div className="col">
                                <ClientView title="Datos del cliente" client={client} />
                            </div>

                            <div className="col">
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>

                        </div>

                        <ListItemsView title="Productos de la factura" items={items} handlerRemoveItem={handlerRemoveItem} />
                        <TotalView total={total} />
                        <button
                            className="btn btn-secondary"
                            onClick={e => onActiveForm(e)}
                        >{activeForm ? 'Ocultar Form' : 'Agregar Item'}</button>
                        {!activeForm || <FormItemsView handler={handlerAddItems} />}

                    </div>
                </div>
            </div>
        </>
    )
}