import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   marks = (text) => {
      this.setState({ email: text })
   }
  
   render() {
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Marks"

               placeholderTextColor = "blue"
               autoCapitalize = "none"
               onChangeText = {this.marks}
               value={this.state.email} />
            
             <Text style={{color:"blue"}}>{this.state.email}</Text>
            
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: 'white',
      textAlign : 'center',
      borderWidth: 1,
      color:"white",
   },
   
})