import { createAppContainer, createStackNavigator } from 'react-navigation'
import Example from "./screen/Example/Example";
import Movies from "./screen/Movies/Movies";
import MovieDetail from "./screen/Movies/MovieDetail/MovieDetail";

const defaultNavigationOptions = {
    headerStyle:{
        backgroundColor: "#000000"
    },
    headerTintColor: '#fff'
}

const Navigator = createStackNavigator(
    {
        // Example
        Movies : {
            screen: Movies,
            navigationOptions: {
                title: 'Movies'
            }
        },
        MovieDetail
    },
    {defaultNavigationOptions}
);

export default createAppContainer(Navigator)