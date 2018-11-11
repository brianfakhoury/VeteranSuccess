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

import { Center } from "@builderx/utils";
import Icon from "@builderx/icons";
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
    fetch("http://550af917.ngrok.io/api/v1/gyphy-images/looking").then(data => {
      data.json().then(url => {
        console.log(url);
        this.setState({
          imgsrc: [url, this.state.imgsrc[1]]
        });
      });
    });
    fetch("http://550af917.ngrok.io/api/v1/gyphy-images/ladder").then(data => {
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
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.ScrollView10}
        >
          <View style={styles.rect7}>
            <Center vertical>
              <Icon
                style={styles.icon}
                name="account-circle"
                type="MaterialCommunityIcons"
                onPress={() => {
                  this.props.navigation.push("Login");
                }}
              />
            </Center>
            <Center vertical>
              <Text style={styles.text} allowFontScaling={false}>
                Career Development
              </Text>
            </Center>
          </View>
          <View style={styles.rect4}>
            <View
              style={styles.rect8}
              onPress={() => {
                this.props.navigation.push("House");
              }}
            >
              <View style={styles.rect5}>
                <Text style={styles.text2} numberOfLines={2}>
                  Some are happy where they are at, but it's always an option to
                  go bigger
                </Text>
                <Text style={styles.text3} numberOfLines={2}>
                  Advance your position
                </Text>
                {this.renderImage(0)}
              </View>
            </View>
            <View
              style={styles.rect9}
              onPress={() => {
                this.props.navigation.push("Car");
              }}
            >
              <View style={styles.rect6}>
                <Text style={styles.text4} numberOfLines={2}>
                  A career that gives you purpose is essential for a good life.
                </Text>
                <Text style={styles.text5} numberOfLines={2}>
                  Find the right career
                </Text>
                {this.renderImage(1)}
              </View>
            </View>
          </View>
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
    height: 953.62,

    overflow: "hidden",
    padding: 25,
    alignSelf: "stretch"
  },

  ScrollView1: {
    width: 375,
    height: 950
  },
  rect8: {
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
    margin: 0,
    position: "absolute",
    top: 25,
    left: 32
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
  rect9: {
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
    overflow: "visible",
    position: "absolute",
    top: 459,
    left: 32
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
  },
  ScrollView10: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 1044,
    width: 374
  },
  rect7: {
    height: 100,
    alignSelf: "stretch"
  },
  text: {
    left: 40,
    width: 181,
    height: 77,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32
  },
  icon: {
    left: 290,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40
  }
});
