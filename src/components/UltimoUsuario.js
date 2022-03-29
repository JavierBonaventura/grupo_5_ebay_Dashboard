import React, { Component } from "react";

class DetalleUsuariosInDb extends Component {
  constructor() {
    super();
    this.state = {
      usuarios: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/users")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((users) => {
        this.setState({ usuarios: users.users });
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
                Ultimo Usuario Creado
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center">
              
              {this.state.usuarios[0] && (
                <img width="350" height="350"
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  src={
                    "http://localhost:4000" +
                    this.state.usuarios.at(-1).imagen
                  }
                  alt={this.state.usuarios.at(-1).imagen}
                />
              )}
              </div>

              {this.state.usuarios[0] && (
                <p>{this.state.usuarios.at(-1).first_name +" "+ this.state.usuarios.at(-1).last_name }</p>
              )}

              <a
                className="btn btn-danger"
                target="_blank"
                rel="nofollow"
                href="/"
              >
                Ver Detalle
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default DetalleUsuariosInDb;
