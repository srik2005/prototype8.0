import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {Audio} from 'expo-av';








class AppHeader extends React.Component {
render() {
    return (
 <View style= {styles.textContainer}>
 <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/09/22/104978_calendar_256x256.png',
          }}
        />
        <Text style={styles.text}>StudyAdvisor App</Text>
      </View>
    )






}
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'gold',
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
export default AppHeader;