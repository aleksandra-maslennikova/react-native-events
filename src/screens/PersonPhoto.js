
import React, { Component } from 'react';
import PersonPhoto from '../components/people/PersonPhoto';

class PersonPhotoScreen extends Component {
    render() {
        return <PersonPhoto id={this.props.navigation.state.params.id} />
    }

}

export default PersonPhotoScreen