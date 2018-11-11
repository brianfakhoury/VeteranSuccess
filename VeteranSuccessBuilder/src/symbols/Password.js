import React, { Component } from "react";
import Icon from "@builderx/icons";

import { View, StyleSheet, Text, TextInput } from "react-native";

export default class Password extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 378,
    height: 49
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.rect1}>
          <Icon
            style={styles.icon}
            name={this.props.iconName ? this.props.iconName : "lock-outline"}
            type={
              this.props.iconType ? (
                this.props.iconType
              ) : (
                "MaterialCommunityIcons"
              )
            }
          />
          <TextInput
            underlineColorAndroid="rgba(0,0,0,0)"
            ref={this.props.ref}
            style={styles.textInput}
            placeholder={
              this.props.textInput ? this.props.textInput : "Password"
            }
            clearButtonMode="always"
            placeholderTextColor="rgba(0,0,0,1)"
            onChangeText={this.props.onChangeText}
            secureTextEntry={true}
            onBlur={this.props.onBlur}
          />
        </View>
        <Text
          style={[
            styles.textNaN,
            {
              color: this.props.errorText
                ? "rgba(208,2,27,1)"
                : "rgba(155,155,155,0)"
            }
          ]}
        >
          {this.props.errorText}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {},

  rect1: {
    flexDirection: "row"
  },
  textNaN: {
    alignSelf: "flex-end",
    paddingTop: 4,
    paddingRight: 8
  },

  textInput: {
    fontSize: 16,
    letterSpacing: -0.22,
    color: "rgba(0,0,0,1)",
    flex: 1,
    height: 50,
    alignSelf: "stretch",
    marginLeft: 12
  },
  icon: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    alignSelf: "center",
    marginLeft: 16
  }
});
