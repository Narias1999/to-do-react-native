import React, {Component} from 'react'
import styles from './styles'
import Task from './tarea'
import {
    View,
    Text,
    FlatList,
    AppRegistry
} from 'react-native'

AppRegistry.registerComponent('tarea', () => Task)

class Body extends Component {
  render() {
    return (
      <View style={styles.bodyContainer}>
        <FlatList
        data={this.props.tasks}
        renderItem={({item}) => <Task 
        item={item}
        press={this.props.deleteItem}
        />}
        />
      </View>
    )
  }
}

export default Body