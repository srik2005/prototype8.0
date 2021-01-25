import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {Audio} from 'expo-av';








export default class WelcomeScreen extends React.Component {

    goToInfo = () => {
        this.props.navigation.navigate('InfoScreen');
      };



    render() {
    return (
 <View style= {styles.textContainer}>
  <Image
                source={require("./logo.png")}
                style={{width:211, height: 211}}/>
        <Text style={styles.text}>Welcome To StudySure</Text>
      
        <TouchableOpacity 
 style={styles.button} 
 onPress={this.goToInfo}>
 <Text style={styles.buttonText2}>Go  Back</Text>
</TouchableOpacity>
      </View>
      


    )






}
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'gold',
    marginLeft:20,
    marginTop:20,
  },
   imageIcon: {
    width: 50,
    height: 50,
    marginLeft: 150,
 
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
