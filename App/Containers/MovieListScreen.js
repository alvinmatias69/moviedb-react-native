import React, { Component } from 'react'
import { 
  ScrollView, 
  Text, 
  KeyboardAvoidingView,
  FlatList,
} from 'react-native'
import { connect } from 'react-redux'
import API from '../Services/Api'
import MovieCard from '../Components/MovieCard'
import TransformMovieList from '../Transforms/TransformMovieList'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/MovieListScreenStyle'

class MovieListScreen extends Component {
  api = {}

  callApi () {
    this.api['getMovieList'].apply(this)
      .then((movies) => {
        this.api['getGenreList'].apply(this)
          .then((genres) => {
            this.setState({
              begin_date: movies.data.dates.minimum,
              end_date: movies.data.dates.maximum,
              movie_list: TransformMovieList(movies.data.results, genres.data.genres),
            })
          })
      })
  }

  constructor (props) {
    super(props)
    this.api = API.create()
    this.state = {
      begin_date: '',
      end_date: '',
      movie_list: [],
    }
  }

  componentWillMount () {
    this.callApi()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <FlatList
            data={this.state.movie_list}
            keyExtractor={item => item.id}
            renderItem={({item}) => <MovieCard movie={item} />}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListScreen)
