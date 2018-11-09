import { observable, action } from 'mobx'
import firebase from 'firebase/app'
import BasicStore from './basic-store'

class AuthStore extends BasicStore {
    @observable email = ''
    @observable password = ''
    @observable user = null

    @action setEmail = email => this.email = email
    @action setPassword = password => this.password = password
    @action setUser = user => this.user = user

    constructor(...args) {
        super(...args)
        firebase.auth().onAuthStateChanged(this.setUser)
    }

    signIn = () => {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    }


}

export default AuthStore