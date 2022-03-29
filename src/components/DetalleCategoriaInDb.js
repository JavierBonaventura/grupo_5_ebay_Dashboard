import React, { Component } from "react";

class DetalleCategoriaInDb extends Component {
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
        {this.state.countByCategory && (
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h3>Listado de Categorias</h3>
              </div>
              <div className="card-body fondoCaja">
                <div className="row">
                  {this.props.categorias.map((item, index) => {
                    return (
                      <div className="col-lg-6 mb-4">
                        <div className="card text-white bg-primary  shadow">
                          <div className="card-body">
                            {item.categoria}{"-> "}
                            {this.state.countByCategory[item.id]} Publicaciones
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default DetalleCategoriaInDb;
