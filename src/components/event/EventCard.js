import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Card from '../common/Card';

export class EventCard extends Component {
    render() {
        const { event } = this.props;
        return (
            <Card style={styles.container}>
                <Image
                    source={{ uri: 'https://picsum.photos/100/50/?random' }}
                    style={styles.image}
                />
                <View style={styles.description}>
                    <Text>{event.title}</Text>
                    <Text>{event.url}</Text>
                </View>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 50,
        marginRight: 10,

    },
    container: {
        flexDirection: 'row',
        marginLeft: 10
    },
    description: {
        flexDirection: 'column'
    }
})
export default EventCard