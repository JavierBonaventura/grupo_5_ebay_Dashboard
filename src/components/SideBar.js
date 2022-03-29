import React from "react";
import image from "../assets/images/banner_3.png";
import { Link, Route, Switch } from "react-router-dom";




class SideBar extends React.Component {
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
        {/*<!-- Sidebar -->*/}
        <ul
          className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/*<!-- Sidebar - Brand -->*/}
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/"
          >
            <div className="sidebar-brand-icon">
              <img className="w-100" src={image} alt="Digital House" />
            </div>
          </a>

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider my-0" />

          {/*<!-- Nav Item - Dashboard -->*/}
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard - BARTER</span>
            </Link>
          </li>

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider" />

          {/*<!-- Heading -->*/}
          <div className="sidebar-heading">Enlaces</div>

          {/*<!-- Nav Item - Pages -->*/}
          <li className="nav-item">
            <Link className="nav-link" to="/UltimoArticulo">
              <i className="fas fa-fw fa-folder"></i>
              <span>Ultimo Articulo</span>
            </Link>
          </li>

          {/*<!-- Nav Item - Charts -->*/}
          <li className="nav-item">
            <Link className="nav-link" to="/UltimoUsuario">
              <i className="fas fa-fw fa-chart-area"></i>
              <span>Ultimo Usuario</span>
            </Link>
          </li>

          {/*<!-- Nav Item - Tables -->*/}
          <li className="nav-item nav-link">
            <Link className="nav-link" to="/DetalleCategoriaInDb">
              <i className="fas fa-fw fa-table"></i>
              <span>Categorias</span>
            </Link>
          </li>

          {/*<!-- Nav Item - Tables -->*/}
          <li className="nav-item nav-link">
            <Link className="nav-link" to="/DetalleProductosInDb">
              <i className="fas fa-fw fa-table"></i>
              <span>Articulos</span>
            </Link>
          </li>

          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
        

        {/* <DetalleUsuariosInDb />
        <DetalleProductosInDb categorias={this.state.categorias} />
        <DetalleCategoriaInDb categorias={this.state.categorias} />*/}
      </React.Fragment>
    );
  }
}

export default SideBar;
