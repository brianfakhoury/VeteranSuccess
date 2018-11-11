import React, { Component } from "react";
import CupertinoSwitch from "../symbols/cupertinoSwitch";
import { Center } from "@builderx/utils";
import { View, StyleSheet, StatusBar, Text } from "react-native";

export default class House extends Component {
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="dark-content" style={styles.statusBar} />
        <Center horizontal>
          <Text style={styles.text} allowFontScaling={false} numberOfLines={3}>
            Do you have reliable housing?
          </Text>
        </Center>
        <CupertinoSwitch style={styles.cupertinoSwitch} />
        <Text style={styles.text2}>
          According to LibertyMutual data, here's some good neighborhoods in
          terms of quietness, safety, and accessibility:
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  statusBar: {},
  cupertinoSwitch: {
    top: 130,
    position: "absolute",
    height: 22,
    width: 43,
    left: "79.79%"
  },
  text: {
    top: 70,
    width: 330,
    height: 120,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32
  },
  text2: {
    height: 99,
    width: 240,
    top: 180,
    left: 20,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 14
  }
});
