import React from 'react'

export default class HolaMundo extends React.Component {

    render() {
        return (
            <div>
                <Saludo></Saludo>
            </div>
        )
    }

}

export  class Saludo extends React.Component {

    render() {
        return (
                <p>Este es el saludo</p>            
        )
    }
}


export  class HolaMundo2 extends React.Component {

    render() {
        return (
            <div>
                <p>Este es otro Hola Mundo</p>
            </div>
        )
    }

}

export  class HolaMundo3 extends React.Component {

    render() {
        return (
            <div>
                <p>Este es el tercer Hola Mundo</p>
            </div>
        )
    }

}