import React, { Component } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

export default class Card extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 375,
    height: 562
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={{
            width: 375,
            height: 561
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  scrollArea: {
    height: 562
  }
});
