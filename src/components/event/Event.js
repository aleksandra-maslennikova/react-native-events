import React, { Component } from 'react';
import { Text, View, Image, Button, ScrollView, StyleSheet } from 'react-native';
import ConfirmModal from '../common/ConfirmModal';

export class Event extends Component {
    state = {
        modalVisible: false
    }

    openModal = () => this.setState({ modalVisible: true })
    closeModal = () => this.setState({ modalVisible: false })

    render() {
        const { event } = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <Image
                            source={{ uri: 'https://picsum.photos/400/200/?random' }}
                            style={styles.image}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                    <Text style={[styles.text, styles.header]}> {event.title}</Text>
                    <Text style={styles.text}> {event.when}</Text>
                    <Text style={styles.text}> {event.where}</Text>
                    <Text style={styles.text}> {event.url}</Text>
                    <Button
                        onPress={this.openModal}
                        title='Delete event'
                    />
                    <ConfirmModal
                        onConfirm={this.closeModal}
                        onCancel={this.closeModal}
                        visible={this.state.modalVisible}
                    >
                        <Text>Are you sure?</Text>
                    </ConfirmModal>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    header: {
        backgroundColor: '#aaa',
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 2,
            width: 0
        },
        elevation: 8
    },
    text: {
        height: 75,
        width: '100%',
        marginBottom: 10
    },
    image: {
        width: 400,
        height: 200,
        display: 'flex'
    }

})
export default Event