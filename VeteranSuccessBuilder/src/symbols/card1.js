import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class card1 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 282,
    width: 359,
    defaultHeight: "auto",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.body}>
          <Text style={styles.bodyText}>
            BuilderX is a screen design tool which codes React Native for you.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    marginBottom: 10,
    flexWrap: "nowrap",

    borderRadius: 28,
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)"
  },

  body: {
    padding: 16,
    right: 8,
    transform: [
      {
        rotate: "0.19deg"
      }
    ]
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#424242"
  }
});
