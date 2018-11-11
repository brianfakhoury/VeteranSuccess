import React, { Component } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

export default class list7 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 500,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <FlatList
          style={styles.list1}
          renderItem={({ item, separators }) => {
            return (
              <View style={styles.rect1}>
                <Text style={styles.text1}>List Row</Text>
              </View>
            );
          }}
          ListHeaderComponent={({ highlighted }) => {
            return (
              <View style={styles.rect}>
                <Text style={styles.text}>List Header</Text>
              </View>
            );
          }}
          ListFooterComponent={({ highlighted }) => {
            return (
              <View style={styles.rect2}>
                <Text style={styles.text2}>List Header</Text>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#FFF"
  },
  list1: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 8
  },
  rect1: {
    height: 43,
    flexDirection: "row",
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
  rect: {
    height: 43,
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    padding: 16,
    borderBottomColor: "#CECED2",
    borderBottomWidth: 1
  },
  text: {
    fontSize: 13,
    color: "#616161"
  },
  rect2: {
    height: 43,
    flexDirection: "row",
    backgroundColor: "#EFEFF4",
    padding: 16
  },
  text2: {
    fontSize: 13,
    color: "#616161"
  }
});
