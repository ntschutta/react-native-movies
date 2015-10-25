/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react-native');

var MOCKED_MOVIES_DATA = [
  {title: 'Title',
    year: '2015',
    posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}
  },
];

var {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} = React;

var MoviesRock = React.createClass({
  render: function() {
      var movie = MOCKED_MOVIES_DATA[0];
      return (
        <View style={styles.container}>
          <Text>{movie.title}</Text>
          <Text>{movie.year}</Text>
          <Image source={{uri: movie.posters.thumbnail}} />
        </View>
      );
    }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('MoviesRock', () => MoviesRock);
