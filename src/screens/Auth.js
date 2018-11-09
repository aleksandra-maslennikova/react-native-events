import React, { Component } from 'react';
import Auth from '../components/auth/Auth';

class AuthScreen extends Component {
    render() {
        return <Auth onSignIn = {this.handleSignIn}/>
    }

}

export default AuthScreen