import { NavigationActions, StackActions } from 'react-navigation';
import { autorun } from 'mobx';
import BasicStore from './basic-store';

class NavigationStore extends BasicStore {
    ref = null

    setNavRef = ref => {
        this.ref = ref;
        this.onReady()
    }

    onReady = () => {
        let firstRun = true;

        setTimeout(() => {
            autorun(() => {
                const screen = this.getStore('auth').user
                    ? 'lists'
                    : 'auth'

                if (!firstRun) {
                    console.log('heeeeeeeeee');
                    this.reset(screen)
                }
                firstRun = false
            })
        }, 0)
    }

    goTo = (routeName, params) => this.ref.dispatch(NavigationActions.navigate({
        routeName, params
    }))

    reset = routeName => this.ref.dispatch(StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName })
        ]
    }))

    goBack = () => this.ref.dispatch(NavigationActions.back())
}

export default NavigationStore