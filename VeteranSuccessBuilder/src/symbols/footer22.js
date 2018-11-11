import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default class footer22 extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    height: 49,
    width: 375,
    defaultHeight: "fixed",
    defaultWidth: "fixed"
  };
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => {
            this.props.navigation.push("Living");
          }}
        >
          <Icon
            style={[
              styles.icon,
              {
                color: this.props.active ? "#007AFF" : "#616161"
              }
            ]}
            name="home"
            type="MaterialCommunityIcons"
          />
          <Text
            style={[
              styles.content,
              {
                color: this.props.active ? "#007AFF" : "#9E9E9E"
              }
            ]}
          >
            Living
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonWrapper2}
          onPress={() => {
            this.props.navigation.pop();
          }}
        >
          <Icon style={styles.icon2} name="library-books" />
          <Text style={styles.content2}>Finances</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper3}>
          <Icon style={styles.icon3} name="poll" />
          <Text style={styles.content3}>Career</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper1}>
          <Icon
            style={styles.icon1}
            name="popcorn"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.content1}>Fun</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonWrapper4}>
          <Icon style={styles.icon4} name="ios-heart-outline" type="Ionicons" />
          <Text style={styles.content4}>Love</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,1)"
  },
  buttonWrapper: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24
  },
  content: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto"
  },
  buttonWrapper2: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#616161",
    fontSize: 24
  },
  content2: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#9E9E9E"
  },
  buttonWrapper3: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#616161",
    fontSize: 24
  },
  content3: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#9E9E9E"
  },
  buttonWrapper1: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#616161",
    fontSize: 24
  },
  content1: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#9E9E9E"
  },
  buttonWrapper4: {
    flex: 0.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    color: "#616161",
    fontSize: 24
  },
  content4: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#9E9E9E"
  }
});
