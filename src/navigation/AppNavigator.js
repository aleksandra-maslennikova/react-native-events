import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthScreen from '../screens/Auth';
import EventList from '../screens/EventList';
import PeopleList from '../screens/PeopleList';
import EventMapScreen from '../screens/EventMap';
import PersonPhoto from '../screens/PersonPhoto';

const ListsNavigator = createBottomTabNavigator({
    events: {
        screen: EventList
    },
    people: {
        screen: PeopleList
    }
})


export default createStackNavigator({
    auth: {
        screen: AuthScreen,
        navigationOptions: {
            title: 'Sign In'
        }
    },
    personPhoto: {
        screen: PersonPhoto
    },
    lists: {
        screen: ListsNavigator
    },
    event: {
        screen: EventMapScreen
    }
})