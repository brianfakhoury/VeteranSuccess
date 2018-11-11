import React, { Component } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default class cupertinoSwitch extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 22,
    width: 45,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Switch
          style={styles.switch1}
          onTintColor="#4CD964"
          thumbTintColor="#FFF"
          tintColor="#9E9E9E"
          value={this.props.value ? true : false}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    justifyContent: "center"
  },
  switch1: {
    width: 45,
    height: 22
  }
});
