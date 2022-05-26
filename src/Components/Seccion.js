import React, { Component } from 'react';
import Controles from './Controles';
class Seccion extends Component {
    constructor(props) {
        super(props);
        this.state = { contadorLocal : 0 }
    }
    

    handlerAumentarLocal = (e)=>{
        this.setState({
            contadorLocal:this.state.contadorLocal+1,
        })
    }
    render() { 
        return (
        <>
            <h3>{this.props.titulo}</h3>
            <p>{this.props.detalle}</p>
            <p>Contador Local: {this.state.contadorLocal}</p>
            <p>Contador Global: {this.props.contadorGlobal}</p>
            <Controles handlerAumentarLocal={this.handlerAumentarLocal} handlerAumentarGlobal={this.props.handlerAumentarGlobal}></Controles>
        </>);
    }
}
 
export default Seccion;