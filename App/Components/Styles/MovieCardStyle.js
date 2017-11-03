import { 
  StyleSheet,
  Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    width: 0.95*width,
    height: 100,
    borderRadius: 4,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 0.025*width,
    backgroundColor: 'white',
    shadowColor: '#7F779F',
    shadowOpacity: 0.5,
    shadowOffset: {height: 1, width: 0},
    shadowRadius: 4
  },
  container: {
    marginTop:20,
    backgroundColor: '#E0E1F4'
  },
  image: {
    width: 66.5,
    height: 100,
  },
  imageContainer: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    overflow: 'hidden'
  },
  textContainer: {
    flex:1,
    marginLeft:7,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})
