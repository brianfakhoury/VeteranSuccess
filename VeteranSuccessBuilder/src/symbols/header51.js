import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class header51 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 10,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.header}>
          <View style={styles.leftWrapper}>
            <TouchableOpacity
              style={styles.leftIconButton}
              onPress={() => {
                this.props.navigation.push("Login");
              }}
            >
              <Icon
                style={styles.leftIcon}
                name="ios-arrow-back"
                type="Ionicons"
              />
              <Text style={styles.leftText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.text}>Home & Auto</Text>
        <Icon
          name="account"
          style={styles.icon}
          type="MaterialCommunityIcons"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    paddingRight: 8,
    paddingLeft: 8
  },
  header: {
    width: "100%",
    height: 44,
    flexDirection: "row"
  },
  leftWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  leftIconButton: {
    flexDirection: "row"
  },
  leftIcon: {
    color: "#007AFF",
    fontSize: 32
  },
  leftText: {
    alignSelf: "center",
    paddingLeft: 5,
    fontSize: 17,
    color: "#007AFF"
  },

  text: {
    height: 60,
    width: 299,
    left: 21,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 52,
    top: "53.4%"
  },
  icon: {
    top: 0,
    left: 320,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(74,144,226,1)",
    fontSize: 40
  }
});
