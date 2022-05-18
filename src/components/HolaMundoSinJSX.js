import React,{Component} from 'react'

class HolaMundoSinJSX extends Component {

    render() {
        return React.createElement('div',{className:'miObjetoDiv'},"Hola mundo sin JSX")
    }
}

export default HolaMundoSinJSX;