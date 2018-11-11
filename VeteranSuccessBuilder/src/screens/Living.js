import React, { Component } from "react";

import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

import { Constants } from "expo";

import Footer22 from "../symbols/footer22";

import Icon from "@builderx/icons";

import { Center } from "@builderx/utils";
import { NavigationActions } from "react-navigation";

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "SignUp" })]
});
export default class Untitled3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgsrc: ["", ""]
    };
  }
  componentWillMount() {
    fetch("http://7d5dab4b.ngrok.io/api/v1/gyphy-images/home").then(data => {
      data.json().then(url => {
        console.log(url);
        this.setState({
          imgsrc: [url, this.state.imgsrc[1]]
        });
      });
    });
    fetch("http://7d5dab4b.ngrok.io/api/v1/gyphy-images/car").then(data => {
      data.json().then(url => {
        console.log(url);
        this.setState({
          imgsrc: [this.state.imgsrc[0], url]
        });
      });
    });
  }

  renderImage(i) {
    if (this.state.imgsrc[i]) {
      return (
        <Image
          style={styles.image}
          source={{
            uri: this.state.imgsrc[i]
          }}
          resizeMode="stretch"
        />
      );
    }
  }
  render() {
    return (
      <View style={styles.root}>
        <StatusBar
          barStyle="dark-content"
          style={styles.statusBar}
          animated={false}
        />
        <ScrollView style={styles.scrollArea}>
          <View style={styles.rect4}>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => {
                this.props.navigation.push("Car");
              }}
            >
              <View style={styles.rect5}>
                <Text style={styles.text2} numberOfLines={2}>
                  A safe, quiet home is essential for a good life experience.
                </Text>
                <Text style={styles.text3} numberOfLines={2}>
                  Find a good, safe home
                </Text>
                {this.renderImage(0)}
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
              <View style={styles.rect6}>
                <Text style={styles.text4} numberOfLines={2}>
                  \n A safe, quiet home is essential for a good life
                  experience.\n{" "}
                </Text>
                <Text style={styles.text5} numberOfLines={2}>
                  \n Find a good, safe home\n{" "}
                </Text>
                {this.renderImage(1)}
              </View>
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Today</Text>
          <Icon
            style={styles.icon}
            name="account-circle"
            type="MaterialCommunityIcons"
            onPress={() => {
              this.props.navigation.push("Login");
            }}
          />
        </ScrollView>
        <Footer22 style={styles.footer22} navigation={this.props.navigation} />
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

  footer22: {
    top: 740,
    left: 0,
    position: "absolute",
    height: 49,
    width: 375
  },

  scrollArea: {
    top: 50,
    left: 0,

    position: "absolute",
    overflow: "hidden",
    height: 690,
    width: 374
  },
  rect4: {
    top: 90,
    left: 0,
    right: 1,
    height: 884.14,
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",

    overflow: "hidden",
    padding: 25
  },

  text: {
    top: 40,
    left: 50,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32
  },
  icon: {
    top: 36,
    left: 280,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40
  },
  ScrollView1: {
    width: 375,
    height: 950
  },
  button2: {
    width: 310,
    height: 400,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "visible",
    margin: 0
  },
  rect5: {
    top: 0,
    left: 0,
    width: 310,
    height: 399,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  text2: {
    top: "73.93%",
    left: 18,
    width: 220,
    height: 61,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left"
  },
  text3: {
    top: "53.88%",
    left: 18,
    width: 220,
    height: 70,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left"
  },
  image: {
    top: -2,
    left: 0,
    width: 310,
    height: 201,
    position: "absolute",
    borderRadius: 0
  },

  ScrollView2: {
    height: 941.67,
    width: 375
  },
  ScrollView3: {
    height: 1141,
    width: 375
  },
  button3: {
    width: 310,
    height: 400,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    margin: 0,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "visible"
  },
  rect6: {
    top: 0,
    left: 0,
    width: 310,
    height: 399,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(206,206,206,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  text4: {
    top: "73.93%",
    left: 18,
    width: 220,
    height: 61,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    textAlign: "left"
  },
  text5: {
    top: "53.88%",
    left: 18,
    width: 220,
    height: 70,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32,
    lineHeight: 32,
    letterSpacing: 0,
    textAlign: "left"
  },
  image2: {
    top: -2,
    left: 0,
    width: 310,
    height: 201,
    position: "absolute",
    borderRadius: 0
  },
  ScrollView8: {
    height: 1111,
    width: 375
  },
  ScrollView9: {
    height: 974.14,
    width: 375
  }
});
