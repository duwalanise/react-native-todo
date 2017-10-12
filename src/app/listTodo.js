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

export default ({ todos }) => (
  <View style={styles.wrapper}>
    {
      todos.map(todo => (
        <View key={todo.id} style={styles.todo}>
          <Text style={styles.todoText}>{todo.name}</Text>
        </View>
      )
    )}
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    height: (height-60),
    backgroundColor: '#eee',
  },
  todo: {
    marginTop: 5,
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 10,
  },
  todoText: {

  }
});