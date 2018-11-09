
import React, { Component } from 'react';
import PersonPhoto from '../components/people/PersonPhoto';

class PersonPhotoScreen extends Component {
    render() {
        return <PersonPhoto uid={this.props.navigation.state.params.uid} />
    }

}

export default PersonPhotoScreen