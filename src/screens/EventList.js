import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';
import EventList from '../components/event/EventList';

@inject('events')
@observer
class EventListScreen extends Component {
    static navigationOptions = {
        title: 'Events List'
    }

    componentDidMount() {
        this.props.events.loadAll();
    }

    getLoader = () => {
        return (<View><ActivityIndicator size='large' /></View>)
    }

    handleEventPress = (uid) => {
        this.props.navigation.goTo('event', { uid })
    }

    render() {
        const {events} = this.props;
        if (events.loading) return this.getLoader();
        return <EventList onEventPress={this.handleEventPress} events={events.list} />
    }
}

export default EventListScreen