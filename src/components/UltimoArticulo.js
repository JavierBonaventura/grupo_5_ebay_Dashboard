import React, { Component } from "react";

class DetallelProductosInDb extends Component {
  constructor() {
    super();
    this.state = {
      productos: [],
      countByCategory: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        this.setState({
          productos: products.products,
          countByCategory: products.meta.countByCategory,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Ulltimo articulo Publicado
              </h5>
            </div>
            {this.state.productos[0] && (
              <div className="card-body">
                <div className="text-center">
                  <img
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                    src={
                      "http://localhost:4000" +
                      this.state.productos.at(-1).imagen
                    }
                    alt={this.state.productos.at(-1).imagen}
                  />
                </div>

                <p>{this.state.productos.at(-1).nombre_producto}</p>

                <p>{this.state.productos.at(-1).descripcion}</p>

                <a
                  className="btn btn-danger"
                  target="_blank"
                  rel="nofollow"
                  href="/"
                >
                  Ver Detalle
                </a>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default DetallelProductosInDb;
