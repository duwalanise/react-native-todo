import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default ({ changeTodo, addTodo, value }) => (
  <View style={styles.wrapper}>
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={(text) => changeTodo(text) }/>
    <TouchableOpacity style={styles.createButton} onPress={() => addTodo()}>
      <Text>Create</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    marginTop: 20,
    padding: 5,
  },
  textInput: {
    height: 30,
    width: (width - 80),
    backgroundColor: 'white',
  },
  createButton: {
    height: 30,
    marginLeft: 8,
    padding: 10,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  }
});