import React, { Component } from 'react'
class Footer extends Component {
    
    render() { 
        return (<><p>Derechos reservados de la aplicación {this.props.email}</p></>);
    }
}
 
export function FooterFuncional({email}){
    return (<><p>Derechos reservados de la aplicación -Footer funcional-{email}</p></>);
}

export const FooterArrow = (props) => <h1>Derechos reservados de la aplicación {props.email}</h1>

export default Footer;