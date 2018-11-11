import React, { Component } from "react";
import Card from "./Card";
import { View, StyleSheet } from "react-native";

export default class Scroll extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 563
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Card style={styles.card} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: 375,
    height: 563
  }
});
