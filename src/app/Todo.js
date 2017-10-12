import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import CreateTodo from './createTodo';
import ListTodo from './listTodo';

class Todo extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/todos')
    .then(res =>res.json())
    .then(data=> {
      this.setState({
        todos: data,
      })
    });
  }

  changeTodo(text) {
    this.setState({
      newTodo: text,
    })
  }

  addTodo() {
    const {todos, newTodo} = this.state;
    if(newTodo.length <= 0) return;
    fetch('http://localhost:3000/todos', {
      method: 'post',
      body: JSON.stringify({
        name: newTodo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        todos: todos.concat(data),
        newTodo: '',
      })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <CreateTodo
          value={this.state.newTodo}
          addTodo={this.addTodo.bind(this)}
          changeTodo={this.changeTodo.bind(this)}
        />
        <ListTodo todos={this.state.todos} />
      </View>
    )
  }
}

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});