import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, FlatList, StyleSheet, Text } from "react-native";

export default class list2 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 500,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <FlatList
        style={[styles.root, this.props.style]}
        renderItem={({ item, separators }) => {
          return (
            <View style={styles.rect1}>
              <Text style={styles.text1}>List Row</Text>
              <Icon
                style={styles.icon}
                name="ios-arrow-forward"
                type="Ionicons"
              />
            </View>
          );
        }}
      />
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 8
  },
  rect1: {
    height: 43,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 16,
    padding: 16,
    paddingLeft: 0,
    borderBottomColor: "#CECED2",
    borderBottomWidth: 1
  },
  text1: {
    fontSize: 17,
    color: "#212121"
  },
  icon: {
    opacity: 0.5,
    color: "#212121",
    fontSize: 24
  }
});
