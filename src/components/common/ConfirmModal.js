import React, { Component } from 'react';
import { Text, View, Modal, Button, StyleSheet } from 'react-native';

export class ConfirmModal extends Component {
    render() {
        const { visible, onCancel, onConfirm, children } = this.props;
        return (
            <Modal
                animationType="slide"
                transparent
                visible={visible}
                onRequestClose={onCancel}
            >
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.text}>{children}</Text>
                        <View style={styles.buttons}>
                            <Button onPress={onConfirm} title='Yes' />
                            <Button onPress={onCancel} title='Cancel' />
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 3
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    text: {
        textAlign: 'center'
    }
})

export default ConfirmModal