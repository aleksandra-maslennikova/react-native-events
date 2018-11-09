import {observable, computed, action} from 'mobx';
import BasicStore from './basic-store';
import firebase from 'firebase/app';
import {entitiesFromFB} from './utils';

class EntitiesStore extends BasicStore {
    @observable loading = false;
    @observable loaded = false;

    @observable entities = {};

    @computed get list() {
        return Object.values(this.entities);
    }

    @computed get size() {
        return Object.keys(this.entities).length;
    }

    checkAndLoadAll() {
        if (!this.loading && !this.loaded) {
            this.loadAll();
        }
    }
}

export function loadAllHelper(refName) {
    return action(function () {
        this.loading = true;

        firebase.database().ref(refName)
            .once('value', action(data => {
                this.entities = entitiesFromFB(data.val());
                this.loading = false;
                this.loaded = true;
            }))
    })
}

export default EntitiesStore
