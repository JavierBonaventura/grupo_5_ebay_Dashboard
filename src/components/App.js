import React from "react";
import { Routes ,Route } from 'react-router-dom';
import SideBar from "./SideBar";
import DetalleCategoriaInDb from "./DetalleCategoriaInDb";
import Contenido from "./Contenido";
import DetalleProductosInDb from "./DetalleProductosInDb";
import NotFound from "./NotFound";
import UltimoUsuario from "./UltimoUsuario";
import UltimoArticulo from "./UltimoArticulo";


class App extends React.Component {
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
      <div id="wrapper">
      <SideBar />
      <Routes>           
          <Route path='/DetalleCategoriaInDb' element={<DetalleCategoriaInDb categorias={this.state.categorias}/>} />      
          <Route path='/DetalleProductosInDb' element={<DetalleProductosInDb categorias={this.state.categorias}/>} />      
          <Route path='/UltimoUsuario' element={<UltimoUsuario categorias={this.state.categorias}/>} />      
          <Route path='/UltimoArticulo' element={<UltimoArticulo categorias={this.state.categorias}/>} />      
          <Route path='/' element={<Contenido />} />      
      </Routes>
      
       
      </div>
  </React.Fragment>
    );
  }
}

export default App;
