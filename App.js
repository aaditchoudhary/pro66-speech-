import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  spclCharChk = (word) => {
    var i = 0;
    i < word.length;
    i++;
    var asciiCode = word.charCodeAt(i);
    console.log(asciiCode);

    (asciiCode >= 65 && asciiCode <= 90) ||
    (asciiCode >= 97 && asciiCode <= 122)
      ? this.speech()
      : alert('Special character is not allowed');
  };
  speech = () => {
    var thingsToSay = this.state.inputText;
    thingsToSay == ''
      ? alert('PLease enter any word!!')
      : Speech.speak(thingsToSay);
  };
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#a6e334'}
          centerComponent={{
            text: 'Text to Speech',
            style: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
          }}
        />
        <Image
          style={{
            marginTop: 20,
            width: 150,
            height: 150,
            alignSelf: 'center',
            marginBottom: 90,
          }}
          source={require('./icon.jpg')}
        />

        <Text style={styles.text}>Enter Any Word</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(inputText) => {
            this.setState({
              inputText: inputText,
            });
          }}
          value={this.state.name}
          placeholder={"Enter Word Here"}
        />

        <TouchableOpacity
          style={styles.speechButton}
          onPress={() => {
            this.spclCharChk(this.state.inputText);
          }}>
          <Text style={styles.buttonPlaceholder}>
            Click Here To Hear Speech
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34ebb1',
    padding: 8,
  },
  inputBox: {
    border: 'solid',
    width: '80%',
    height: 30,
    alignSelf: 'center',
    textAlign: 'center',
  },

  speechButton: {
    border: 'solid',
    width: '60%',
    borderRadius: 10,
    height: '15%',
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: '#8aff9d',
    textAlign: 'center',
  },

  buttonPlaceholder: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 30,
    fontFamily: 'halvetica',
    marginBottom: 15,
    marginTop: -40,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#e67575',
    border: 'transparent',
    borderRadius: 10,
    boxShadow: '0 0 10px 0 rgba(0,0,0,.4)',
    height: 40,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 18,
    paddingTop: 3,
  },
});
