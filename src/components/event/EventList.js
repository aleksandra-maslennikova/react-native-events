import React, { Component } from 'react';
import { Text, SectionList, StyleSheet, TouchableOpacity } from 'react-native';
import { inject } from 'mobx-react';
import groupBy from 'lodash/groupBy';
import EventCard from './EventCard';

@inject('navigation')
export class EventList extends Component {
    handleEventPress = ({ id, title }) => this.props.navigation.goTo('event', { id, title })
    render() {
        const { events } = this.props;
        const grouped = groupBy(events, event => event.title.charAt(0));
        const sections = Object.entries(grouped).map(([letter, list]) => ({
            title: `${letter}, ${list.length} events`,
            data: list.map(event => ({ key: event.uid, event }))
        }));
        return (
            <SectionList
                sections={sections}
                renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>}
                renderItem={({ item }) => <TouchableOpacity onPress={() => this.handleEventPress(item.key)}><EventCard event={item.event} /></TouchableOpacity>}
            />
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#f0f0f0',
        height: 40,
        lineHeight: 40,
        marginBottom: 5,
        shadowOffset: {
            height: 2, width: 0
        },
        shadowOpacity: 0.3,
        elevation: 3
    }
})

export default EventList