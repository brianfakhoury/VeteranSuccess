import React, { Component } from "react";
import Icon from "@builderx/icons";
import Footer22 from "../symbols/footer22";
import { Center } from "@builderx/utils";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";

export default class Entertainment extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.ScrollView1}
        >
          <ScrollView
            style={styles.scrollArea2}
            horizontal={true}
            contentContainerStyle={styles.ScrollView3}
          >
            <View style={styles.rect6} horizontal={true}>
              <Center vertical>
                <TouchableOpacity style={styles.button3}>
                  <View style={styles.rect4}>
                    <Text style={styles.text6} numberOfLines={2}>
                      \n \n A safe, quiet home is essential for a good life\n
                      experience.\n{" "}
                    </Text>
                    <Text style={styles.text7} numberOfLines={2}>
                      \n \n Find a good, safe home\n{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Center>
              <Center vertical>
                <TouchableOpacity style={styles.button5}>
                  <View style={styles.rect7}>
                    <Text style={styles.text10} numberOfLines={2}>
                      \n \n A safe, quiet home is essential for a good life\n
                      experience.\n{" "}
                    </Text>
                    <Text style={styles.text11} numberOfLines={2}>
                      \n \n Find a good, safe home\n{" "}
                    </Text>
                  </View>
                  <View style={styles.rect8}>
                    <Text style={styles.text12} numberOfLines={2}>
                      \n \n A safe, quiet home is essential for a good life\n
                      experience.\n{" "}
                    </Text>
                    <Text style={styles.text13} numberOfLines={2}>
                      \n \n Find a good, safe home\n{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Center>
              <Center vertical>
                <TouchableOpacity style={styles.button6}>
                  <View style={styles.rect9}>
                    <Text style={styles.text14} numberOfLines={2}>
                      \n \n A safe, quiet home is essential for a good life\n
                      experience.\n{" "}
                    </Text>
                    <Text style={styles.text15} numberOfLines={2}>
                      \n \n Find a good, safe home\n{" "}
                    </Text>
                  </View>
                  <View style={styles.rect10}>
                    <Text style={styles.text16} numberOfLines={2}>
                      \n \n A safe, quiet home is essential for a good life\n
                      experience.\n{" "}
                    </Text>
                    <Text style={styles.text17} numberOfLines={2}>
                      \n \n Find a good, safe home\n{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Center>
            </View>
          </ScrollView>
          <Text style={styles.text5} numberOfLines={2}>
            Fun Stuff Around You
          </Text>
          <Icon
            style={styles.icon}
            name="account-circle"
            type="MaterialCommunityIcons"
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
  scrollArea: {
    top: 50,
    left: 0,
    width: 375,
    height: 690,
    position: "absolute",
    overflow: "hidden"
  },
  scrollArea2: {
    top: 91,
    left: 0,
    right: 0,
    height: 898,
    position: "absolute",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 25,
    overflow: "visible"
  },

  text5: {
    top: 29,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32,
    left: "10.67%",
    width: 200
  },
  icon: {
    top: 36,
    left: 280,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40
  },
  footer22: {
    top: 740,
    left: 0,
    width: 375,
    height: 49,
    position: "absolute"
  },
  ScrollView1: {
    height: 989,
    width: 375
  },
  rect6: {
    top: 40,
    left: 0,
    width: 738,
    height: 430,
    position: "absolute"
  },
  ScrollView2: {
    height: 470,
    width: 739
  },
  button3: {
    width: 310,
    height: 400,
    position: "absolute",
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
    left: "24%"
  },
  rect4: {
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
  text6: {
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
  text7: {
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
  button5: {
    width: 310,
    height: 401,
    position: "absolute",
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
    left: "70.46%"
  },
  rect7: {
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
  text10: {
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
  text11: {
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
  ScrollView3: {
    height: 899,
    width: 738
  },
  rect8: {
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
  text12: {
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
  text13: {
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
  button6: {
    left: "-23.31%",
    width: 310,
    height: 401,
    position: "absolute",
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
  rect9: {
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
  text14: {
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
  text15: {
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
  rect10: {
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
  text16: {
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
  text17: {
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
  }
});
