import React from 'react';
import UserContext from '../UserContext';

export default class User extends React.Component {
    static contextType = UserContext;
    /*constructor(props) {
        super(props);
    }*/
    state={
        user:{nombre:"",apellido:""}
    }
    componentDidMount() {
        const user = this.context;
        this.setState({user:user});
    }

    render() {
        return(
            <>
                <p>Hola {this.state.user.nombre}</p>
            </>
        )
    }

}