/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import Header from './components/header'
import Body from './components/body'
import {
  Platform,
  StyleSheet,
  Button,
  Alert,
  View,
  AppRegistry
} from 'react-native';

AppRegistry.registerComponent('header', () => Header)
AppRegistry.registerComponent('body', () => Body)

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      text: '',
      tasks: []
    }
  }
  addTask = () => {
    const newTask = {
      text: this.state.text,
      key: Date.now()
    }
    this.setState({
      tasks: [...this.state.tasks, newTask],
      text: ''
    })
  }
  changeValue = (text) => {
    this.setState({text})
  } 
  myAwesomeMethod() {
    Alert.alert('Awesome title', 'Awesome message')
  }
  deleteItem = (item) => {
    const newTasks = this.state.tasks.filter(e => e.key != item.key)
    this.setState({
      tasks: newTasks
    })
  }
  render() {
    return (
      <View style={styles.parent}>
        <Header
        changeText={this.changeValue}
        text={this.state.text}
        addTask={this.addTask}
        />
        <Body
        deleteItem={this.deleteItem}
        tasks={this.state.tasks}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'space-between',
  }
});
