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
              <h3>Listado de Productos</h3>
            </div>
            <div className="card-body fondoCaja">
              <div className="row">
                {this.state.productos.map(function (item, index) {
                  return (
                    <div className="col-lg-6 mb-4">
                      <div className="card text-white bg-dark  shadow">
                        <div className="card-body">{item.nombre_producto}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          </div>
       
      </React.Fragment>
    );
  }
}
export default DetallelProductosInDb;
