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
import db from './config';
import firebase from 'firebase';
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      english: '',
      math: '',
      hindi: '',
      social: '',
      science: '',
      error:'',
      total:'',
    };
  }

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
  englishm = (text) => {
    this.setState({ english: text });
  };
  mathm = (text) => {
    this.setState({ math: text });
  };
  socialm = (text) => {
    this.setState({ social: text });
  };
  hindim = (text) => {
    this.setState({ hindi: text });
  };
  sciencem = (text) => {
    this.setState({ science: text });
  };

  sum = () => {
    var engmarks = (this.state.english);
    var mathmarks = (this.state.math);
    var socialmarks = (this.state.social);
    var sciencemarks = (this.state.science);
    var hindimarks = (this.state.hindi);
    var total =
      (engmarks + mathmarks + socialmarks + sciencemarks + hindimarks) *3;
   alert('You Should Study For' + ' ' + total + ' ' + 'min' + ' a day'+' '+'per subject');
    ToastAndroid.show('You Should Study For' + ' ' + total + ' ' + 'min' + ' a day'+' '+'per subject', ToastAndroid.SHORT);
  };

validator(){
if(this.state.english==""||this.state.math==""||this.state.hindi==""||this.state.social==""||this.state.science==""){
this.setState({error:'no empty values please'})

}
storeFb = (math,science,social,hindi,english) =>{
db.collection("subjects").add({
english : this.state.english,
math : this.state.math,
science : this.state.science,
social : this.state.social,
hindi : this.state.hindi,
})

  
}
}
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
goToAdvice = () => {
  this.props.navigation.navigate('AdviceScreen');
};
  render() {
    return (
      <View>
        <ScrollView>
          <AppHeader />

          <Text style={styles.buttonText}>English</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            onBlur={()=>this.validator()}
            placeholder="Max Marks - Your Marks"
            placeholderTextColor="blue"
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={(text) => {
              this.setState({
                english: text,
              });
            }}
            value={this.state.english}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Math</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor="magenta"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({
                math: text,
              });
            }}
            value={this.state.math}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Science</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor=" rgb(255,100,0)"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({
                science: text,
              });
            }}
            value={this.state.science}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Social</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor="blue"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({
                social: text,
              });
            }}
            value={this.state.social}
          />
          <Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Hindi</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor="orange"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({
                hindi: text,
              });
            }}
            value={this.state.hindi}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Button title="How Much Time Should You Study" onPress={this.goToAdvice} />
          
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
