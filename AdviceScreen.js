import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AppHeader from './components/AppHeader';
import db from './config';
import firebase from 'firebase';
export default class AdviceScreen extends React.Component {
 state = {
    a: 'value'
  }



   constructor(){
super();
this.state={
english:null,
math: null,
hindi:null,
social:null,
science:null,



}}
componentDidMount(){
  var subref  = db.ref("subjects");
  subref.on("value", data => {
    var subDetails = data.val();
    this.setState({
      english: subDetails.english,
      math: subDetails.math,
      social: subDetails.social,
      science: subDetails.science,
      hindi: subDetails.hindi,
    });
  });
}
sum = () => {
  var engmarks = (subDetails.english);
  var mathmarks = (subDetails.math);
  var socialmarks = (subDetails.social);
  var sciencemarks = (subDetails.science);
  var hindimarks = (subDetails.hindi);
  var total =
    (engmarks + mathmarks + socialmarks + sciencemarks + hindimarks) *1.98;
 
};
englishm = (text) => {
  var engRef = firebase.database().ref("subjects/english");

  engRef.update ({
     "english": text 
  });

};
mathm = (text) => {
  var mathRef = firebase.database().ref("subjects/math");

  mathRef.update ({
     "math": text 
  });
};
socialm = (text) => {
  var socialRef = firebase.database().ref("subjects/social");

  socialRef.update ({
     "social": text 
  });
};
hindim = (text) => {
  var hindiRef = firebase.database().ref("subjects/hindi");

  hindiRef.update ({
     "hindi": text 
  });
};
sciencem = (text) => {
  var scienceRef = firebase.database().ref("subjects/science");

  scienceRef.update ({
     "science": text 
  });
};


 

   goToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <View>
      <AppHeader/>
  

   
        <Text>The Time You Should Study</Text>
        <Text>{this.sum}</Text>

        <Text 
        style={styles.buttonText2}>{this.state.a}</Text>
      
   <TouchableOpacity 
            style={styles.button} 
            onPress={this.goToHome}>
            <Text style={styles.buttonText2}>Go  Back</Text>
          </TouchableOpacity>
     
      </View>





 


    )
  }
}
const styles = StyleSheet.create({
    button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:150,
    width : 200,
    height:50,
    backgroundColor:'blue'
  },
 
   buttonText2 : {
    
    textAlign : 'center',
    color : 'gold',
    fontSize:35,
  }
})