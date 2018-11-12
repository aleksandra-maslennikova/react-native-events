import React, { Component } from 'react';
import { View, Text, TextInput, Platform, TouchableOpacity } from 'react-native';
import { observer, inject } from 'mobx-react';

@inject('auth')
@observer
class Auth extends Component {
    render() {
        const { auth } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={[styles.email, { fontSize: 20 }]}>Email:</Text>
                    <TextInput
                        style={styles.input}
                        value={auth.email}
                        onChangeText={auth.setEmail}
                        keyboardType="email-address"
                    />
                    <Text>email is {auth.isValidEmail ? 'valid' : 'invalid'}</Text>
                </View>
                <View>
                    <Text>Password:</Text>
                    <TextInput
                        style={styles.input}
                        value={auth.password}
                        onChangeText={auth.setPassword}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity onPress={auth.signIn} ><Text>SignIn</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    email: {
        color: 'red'
    },
    input: {
        ...Platform.select({
            ios: {
                borderBottomWidth: 1,
                borderBottomColor: '#000'
            },
            android: {

            }
        })
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
}

export default Auth
