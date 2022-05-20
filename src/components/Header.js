import React, { Component } from 'react';

class Header extends Component {
    
    constructor(props) {
        console.log("Constructor")
        super(props);
        this.state={
            mostrar:true,
            edad:30,
            contador:0,
        };
       // this.contar = this.contar.bind(this);
    }
    
    componentDidMount(){
        console.log("El componente se ha montado")
    }

    componentDidUpdate(prevProps, prevState){
        console.log("El componente ha sido actualizado")
        console.log(prevProps)
        console.log(prevState)
    }

    componentWillUnmount(){
        console.log("El componente se ha desmontado")
    }

    /*
    state = { 
        mostrar:true,
        edad:30
    }*/
    contar = (e)=> {        
        this.setState({
            contador: this.state.contador+1
        })
    }
    
    render() { 
        return (
            <>
            {this.state.mostrar?(
                <>
                    <h1>Hola {this.props.nombre} con edad {this.state.edad}</h1>
                    <p>Contador: <label>{this.state.contador}</label></p>
                    <button onClick={this.contar}>Sumar</button>
                </>
            ):(
                <h2>No mostrar</h2>
            )}
            
            </>
        );
    }
}
 
export default Header;