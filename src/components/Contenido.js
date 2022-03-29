import React from "react";
import TotalUsuariosInDb from "./TotalUsuariosInDb";
import TotalProductosInDb from "./TotalProductosInDb";
import TotalCategoriaInDb from "./TotalCategoriaInDb";
import Row from "./Row";

import TopBar from "./TopBar";

class Contenido extends React.Component {
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
        {/*<!-- Content Wrapper -->*/}

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/*<!-- Main Content -->*/}

            <TopBar />
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Barter Dashboard</h1>
              </div>
              <div className="row">
                <TotalUsuariosInDb />
                <TotalProductosInDb categorias={this.state.categorias} />
                <TotalCategoriaInDb categorias={this.state.categorias} />
                <Row />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Contenido;
