import React, { Component } from 'react';
class Controles extends Component {
    
    render() { 
        return (
            <>
                <button onClick={this.props.handlerAumentarLocal}>Aumentar Local</button>
                <button onClick={this.props.handlerAumentarGlobal}>Aumentar Global</button>
            </>
        );
    }
}
 
export default Controles;