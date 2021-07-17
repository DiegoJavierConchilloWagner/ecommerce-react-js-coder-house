import React from "react";
import "./products.css";
// import ItemListContainer from "../../components/itemListContainer/itemListContainer";
import ItemListContainer from "../../components/itemListContainer/itemListContainer";

function Products() {
    return (
        <section className="contenedorFiltro">
            <div className="contenedorChico">
                <div className="fila-Filtro">
                    <input type="radio" name="filtro" id="Todos" defaultChecked className="input" />
                    <label htmlFor="Todos">Todos</label>
                    <input type="radio" name="filtro" id="Perros" className="input" />
                    <label htmlFor="Perros">Perros</label>
                    <input type="radio" name="filtro" id="Gatos" className="input" />
                    <label htmlFor="Gatos">Gatos</label>
                    <input type="radio" name="filtro" id="Premium" className="input" />
                    <label htmlFor="Premium">Premium</label>
                    <input type="radio" name="filtro" id="Promociones" className="input" />
                    <label htmlFor="Promociones">Promociones</label>
                    <div className="bordeC"></div> 
                    <div id="categorias">
                        <div>
                            <div className="contenedorChico">
                                <div className="filaP fila-2">
                                    <div id="sections">
                                        <h2 className="filtroTodos">Todos</h2>
                                        <h2 className="filtroPerros">Perros</h2>
                                        <h2 className="filtroGatos">Gatos</h2>
                                        <h2 className="filtroPremium">Premium</h2>
                                        <h2 className="filtroPromociones">Promociones</h2>
                                    </div>
                                    <input type="search" placeholder="Buscar..." className="card-filter" />
                                </div>
                                <div className="filaP">
                                    <ItemListContainer />
                                </div>
                                <div className="paginaBoton">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>→</span>
                                </div>
                            </div>
                            <div className="borde"></div>
                        </div>
                        {/*-----------------------------------------------------------------------------------------------*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Products;
