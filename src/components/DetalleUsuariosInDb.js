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


        {/*<!-- Categories in DB -->*/}
        <div>         
          <p>
            Listado de Usuarios{" "}
            {this.state.usuarios.map(function (item, index) {
              return <li key={index}>{item.first_name} </li>;
            })}
          </p>
          {this.state.usuarios[0] && <h1>Ultimo usuario {this.state.usuarios.at(-1).first_name}</h1>}
        </div>
      </React.Fragment>
    );
  }
}
export default DetalleUsuariosInDb;
