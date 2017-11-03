import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { 
  View, 
  Text,
  Image,
} from 'react-native'

import styles from './Styles/MovieCardStyle'

export default class MovieCard extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: 'https://image.tmdb.org/t/p/w500' + this.props.movie.poster_path }}
          />
        </View>
        <View style={styles.textContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 5}}> 
            <Text style={{fontWeight: 'bold', color: '#7F779F', fontSize: 10}}>{this.props.movie.vote_average}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', color: '#42386C', fontSize: 14}}>
              {this.props.movie.title}
            </Text>
            <Text style={{color: '#D5D7EC', fontWeight: 'bold', fontSize: 10, marginLeft: 5}}>
              {this.props.movie.release_date}
            </Text>
          </View>
          <Text style={{fontSize: 12, marginRight: 10, marginTop: 5, color: '#42386C'}}>
            {this.props.movie.overview}
          </Text>
          <Text style={{fontSize: 9, fontWeight: 'bold', marginTop:5, color: '#42386C'}}>
            {this.props.movie.genre}
          </Text>
        </View>
      </View>
    )
  }
}
