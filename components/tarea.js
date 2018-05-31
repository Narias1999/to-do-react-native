import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'

class Task extends Component {
  render () {
    return (
      <TouchableOpacity onPress={() => this.props.press(this.props.item)}>
        <View style={styles.task}>
          <Text>
            {this.props.item.text}
          </Text>
          <Icon name="ios-trash" size={30} color="gray"/>
        </View>
      </TouchableOpacity>
    )
  }
}
const styles = StyleSheet.create({
  task: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 4,
    backgroundColor: 'rgb(200,200,200)'
  }
})

export default Task