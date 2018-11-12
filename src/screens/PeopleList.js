import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, ActivityIndicator } from 'react-native';
import PeopleList from '../components/people/PeopleList';

@inject('people')
@observer
class PeopleListScreen extends Component {

    static navigationOptions = {
        title: 'People List'
    }
    componentDidMount() {
        this.props.people.loadAll();
    }

    get loader() {
        return <View><ActivityIndicator size='large' /></View>
    }

    render() {
        const { people } = this.props
        if (people.loading) return this.loader
        return <PeopleList />
    }


}

export default PeopleListScreen
