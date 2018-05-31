import React, {Component} from 'react'
import {
  View,
  TextInput
} from 'react-native'
import styles from './styles'

class Header extends Component {
  render() {
    return (
      <View style={styles.basic}>
        <TextInput
        placeholder="What you want to do?"
        value={this.props.text}
        onChangeText={this.props.changeText}
        onSubmitEditing={this.props.addTask}/>
      </View>
    )
  }
}
export default Header