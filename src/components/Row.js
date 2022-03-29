import React from "react";
import mandalorian from "../assets/images/mandalorian.jpg";
import "../App.css";
import DetalleCategoriaInDb from "./DetalleCategoriaInDb";
import UltimoArticulo from "./UltimoArticulo";
import UltimoUsuario from "./UltimoUsuario";
import DetalleProductosInDb from "./DetalleProductosInDb";

class Row extends React.Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }
  componentDidMount() {
    fetch("http://localhost:4000/api/category")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((category) => {
        this.setState({ categorias: category.category });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <React.Fragment>
        <UltimoArticulo />
        <UltimoUsuario />
        <DetalleCategoriaInDb categorias={this.state.categorias} />
        <DetalleProductosInDb categorias={this.state.categorias} />
      </React.Fragment>
    );
  }
}

export default Row;
