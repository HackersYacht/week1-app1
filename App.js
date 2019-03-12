//App.js
import React, {Component} from 'react'
import {
  View,
  Text,
  TouchableOpacity, // Touchables are what we use to create buttons
  StyleSheet,
  Image
} from 'react-native'

export default class App extends Component{
  render(){
    return (
      <View style={styles.main}>
        <View style={{flex:3, backgroundColor: '#FAF33E', justifyContent: 'center'}}>
        {/*This View will occupy 3/6 of the screen */}
          <Image source={require('./img/pic.jpeg')} style={styles.img} />
        </View>

        <View style={{flex:2, flexDirection: 'row'}}>
        {/*This View will occupy 2/6 of the screen */}

          <View style={{flex:3, backgroundColor: '#55505C', justifyContent: 'center'}}>
        {/*This View will occupy 3/5 of the view it's in */}

            <Text style={styles.txt}>😀</Text>
          </View>


          <View style={{flex:2, backgroundColor: '#5D737E', justifyContent: 'center'}}>
        {/*This View will occupy 2/5 of the view it's in */}
            <Text style={styles.txt}>👻</Text>
          </View>
        </View>

        <View style={{flex: 1, backgroundColor: '#D6F8D6'}}>
      {/*This View will occupy 1/6 of the screen */}

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txt}>Booomm !!! 👀</Text>
          </TouchableOpacity>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor: '#FFF',
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  txt: {
    fontSize: 20,
    alignSelf: 'center',

  },
  btn: {
    padding: 10,
    margin: 30,
    marginHorizontal: 100,
    borderRadius: 10,
    backgroundColor: '#7FC6A4',
    paddingHorizontal: 20
  },
  img: {
    width: 300,
    height: 200,
  }
})
