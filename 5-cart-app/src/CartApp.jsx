import { CartView } from "./components/CartView";
import { CatalogView } from "./components/CatalogView";
import { products } from "./data/products";


export const CartApp = () => {

    //Estados

    //Efectos


    //Funciones


    return (
        <>

            <div className="container">

                <h3>Carrito de la Compra App</h3>
                <div className="row">
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Teclado Mecánico RGB</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB y siwtches red</p>
                                <p className="card-text">1000 €</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Smart TV 55"</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB y siwtches red</p>
                                <p className="card-text">10000 €</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Memoria Corsair 8GB DDR4</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB y siwtches red</p>
                                <p className="card-text">500 €</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Asus Nvidea RTX</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB y siwtches red</p>
                                <p className="card-text">2500 €</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Audifono</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB y siwtches red</p>
                                <p className="card-text">1500 €</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">CPU Core i5</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB y siwtches red</p>
                                <p className="card-text">3000 €</p>
                                <button className="btn btn-primary">Agregar</button>

                            </div>
                        </div>
                    </div>

                </div>

                <div className="my-4 w-50">
                    <CartView />
                </div>
            </div>
        </>
    )
}
