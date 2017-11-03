import { StackNavigator } from 'react-navigation'
import MovieListScreen from '../Containers/MovieListScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MovieListScreen: { screen: MovieListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MovieListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
