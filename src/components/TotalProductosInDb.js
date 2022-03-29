import React, { Component } from "react";

class TotalProductosInDb extends Component {
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
        <div className="col-md-4 mb-4">
          <div className={`card border-left-primary shadow h-100 py-2`}>
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div
                    className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}
                  >
                    {" "}
                    Cantidad de Productos
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {this.state.productos.length}
                  </div>
                </div>
                <div className="col-auto">
                  <i
                    className={`fas fa-clipboard-list fa-2x text-gray-300`}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*<!-- Categories in DB -->*/}
  
      </React.Fragment>
    );
  }
}
export default TotalProductosInDb;
