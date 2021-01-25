import * as React from 'react';
import {View, KeyboardAvoidingView , StyleSheet,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HomeScreen from './HomeScreen';
import AdviceScreen from './AdviceScreen';
import WelcomeScreen from './WelcomeScreen';
import InfoScreen from './InfoScreen';
import{createAppContainer,createSwitchNavigator  }from 'react-navigation';
export default class App extends React.Component {
  render() {
    return (
     
      <View style={{marginTop:20,backgroundColor:"black"}}>
           <LinearGradient
          // Background Linear Gradient
          colors={['rgb(0,165,255)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 50,
            height: 800,
            borderRadius:1000,
          }}
        />
         
         
        <LinearGradient
          // Background Linear Gra2dient
          colors={['rgb(0,255,255)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 550,
            height: 300,
            borderRadius:75,
          }}
        />
       <LinearGradient
          // Background Linear Gra2dient
          colors={['rgb(0,255,255)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 50,
            height: 900,
          }}
        />
      
  <AppContainer/>
    
        
      </View>

   
    );
  }
}
var AppNavigator = createSwitchNavigator({
  WelcomeScreen:WelcomeScreen,
  InfoScreen:InfoScreen,
  HomeScreen: HomeScreen,
AdviceScreen: AdviceScreen,


})
const AppContainer = createAppContainer(AppNavigator)


 
