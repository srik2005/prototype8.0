import * as React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,ToastAndroid, 
} from 'react-native';

import AppHeader from './components/AppHeader';
import Inputs from './inputs.js';

export default class InfoScreen extends React.Component {
    goToHome = () => {
        this.props.navigation.navigate('HomeScreen');
      };


  render() {
    return (
      <View>
        <ScrollView>
          <AppHeader />

          <Text style={styles.buttonText}>What's Your Name???</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
          
            placeholder="Max Marks - Your Marks"
            placeholderTextColor="blue"
            autoCapitalize="none"
          
            
          />

          <Text style={styles.buttonText}>Grade</Text>
          <TextInput
            style={styles.input}
            
            underlineColorAndroid="transparent"
            placeholder="Grade"
            keyboardType="numeric"
            placeholderTextColor="magenta"
            autoCapitalize="none"
            
          />

          <Button 
          title="Next"
          onPress={this.goToHome}  />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 35,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    textAlign: 'center',
    borderWidth: 1,
    color: 'white',
  },
});
