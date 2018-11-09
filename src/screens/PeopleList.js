import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, ActivityIndicator } from 'react-native';
import PeopleList from '../components/people/PeopleList';
import { email } from 'react-native-communications';

@inject('people')
@observer
class PeopleListScreen extends Component {
    static navigationOptions = {
        title: 'People List'
    }

    componentDidMount() {
        const { people } = this.props;
        if (!people.loaded && !people.loading) people.loadAll();
    }

    render() {
        const { people } = this.props;
        if (people.loading) return this.getLoader();
        return <PeopleList onPersonPress={this.handlePress} onLongPress={this.handleLongPress} />
    }

    getLoader() {
        return <View><ActivityIndicator size='large' /></View>
    }

    handlePress = uid => {
        email(this.props.people.entities[uid].email);
        //        text('+123456789', 'event notification')
    }

    handleLongPress = uid => {
        this.props.navigation.navigate('personPhoto', { uid })
    }
}

export default PeopleListScreen
