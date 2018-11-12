import React, { Component } from 'react';
import Photo from '../common/Photo';
import { inject } from 'mobx-react';

@inject('people')
class PersonPhoto extends Component {
    getPhoto = ({ uri }) => {
        const { id, people } = this.props;
        people.takePhoto(id, uri);
    }
    render() {
        return <Photo getPhoto={this.getPhoto} />
    }
}

export default PersonPhoto