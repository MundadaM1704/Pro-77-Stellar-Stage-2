import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>Stellar App</Text>
          </View>

          <Image
            source={require('../assets/main-icon.png')}
            style={styles.titleImage}></Image>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SpaceCrafts');
            }}
            style={styles.routeCard}>
            <Text style={styles.routeText}>SpaceCrafts</Text>
            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('StarMap');
            }}
            style={styles.routeCard}>
            <Text style={styles.routeText}>StarMap</Text>
            <Image
              source={require('../assets/star_map.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('DailyPic');
            }}
            style={styles.routeCard}>
            <Text style={styles.routeText}>DailyPic</Text>
            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    top: 100,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 40,
    marginTop: 80,
    borderRadius: 30,
    backgroundColor: 'white',
    top: 30,
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 30,
    paddingLeft: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  iconImage: {
    position: 'absolute',
    height: 90,
    width: 95,
    resizeMode: 'contain',
    right: 5,
    marginTop: 5,
  },
  titleImage: {
    marginLeft: 100,
    marginRight: 100,
    position: 'absolute',
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginTop: -10,
  },
});
