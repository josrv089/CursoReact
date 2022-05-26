import React, { Component } from "react";
import Scroll from "./Scroll";
import Seccion from "./Seccion";

class Body extends Component {
  state = { contadorGlobal: 0 };

  handlerAumentarGlobal = (e) => {
    this.setState({
      contadorGlobal: this.state.contadorGlobal + 1,
    });
  };

  render() {
    return (
      <>
        <Seccion
          titulo={"Esta es una sección"}
          detalle={"Este es el detalle"}
          handlerAumentarGlobal={this.handlerAumentarGlobal}
          contadorGlobal={this.state.contadorGlobal}
        />

        <Seccion
          titulo={"Segunda sección"}
          detalle={"Este es el detalle de la segunda sección"}
          handlerAumentarGlobal={this.handlerAumentarGlobal}
          contadorGlobal={this.state.contadorGlobal}
        />
        <Scroll></Scroll>

        <Seccion
          titulo={"tercer seccion "}
          detalle={"Este es el detalle"}
          handlerAumentarGlobal={this.handlerAumentarGlobal}
          contadorGlobal={this.state.contadorGlobal}
        />
        <Seccion
          titulo={"Ultima seccion "}
          detalle={"Este es el detalle"}
          handlerAumentarGlobal={this.handlerAumentarGlobal}
          contadorGlobal={this.state.contadorGlobal}
        />
      </>
    );
  }
}

export default Body;
