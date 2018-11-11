import React, { Component } from "react";

import { Center } from "@builderx/utils";
import CupertinoSwitch from "../symbols/cupertinoSwitch";
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
  Image
} from "react-native";

export default class Car extends Component {
  constructor(props) {
    super(props);
    var loading =
      "https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif";
    console.log(typeof loading);
    this.state = {
      imgsrc: Array(10).fill(loading),
      imgtxt: Array(10).fill("Loading..."),
      imgrate: Array(10).fill("..."),
      switch: false
    };
  }
  loadInfo() {
    fetch("http://947246ea.ngrok.io/api/v1/vehicle-stats/best").then(data => {
      data.json().then(res => {
        res.forEach((car, index) => {
          let search = `https://www.googleapis.com/customsearch/v1?q=${car.Manufacturer +
            car.Model +
            car.Model_Year +
            " car"}&searchType=image&key=AIzaSyDQLocpovH5cjEXGIFrIuNKUVQEx9s2Yi4&cx=002897967468687864836:olrpqlhe_1s`;
          fetch(search).then(data1 => {
            data1.json().then(res1 => {
              let link = res1.items[0].link;
              let links = this.state.imgsrc;
              links[index] = link;
              let txts = this.state.imgtxt;
              txts[index] = car.Manufacturer + car.Model + car.Model_Year;
              let rates = this.state.imgrate;
              rates[index] =
                "" + (car.City_Conventional_Fuel + car.Hwy_Conventional_Fuel);
              this.setState({
                imgsrc: links,
                imgtxt: txts,
                imgrate: rates
              });
            });
          });
        });
      });
    });
  }
  componentDidMount() {
    let binded = this.loadInfo.bind(this);
    setTimeout(() => binded(), 3000);
  }
  render() {
    return (
      <View style={styles.root}>
        <StatusBar barStyle="dark-content" style={styles.statusBar} />
        <ScrollView style={styles.scrollArea}>
          <Text style={styles.text2}>
            According to LibertyMutual data, these cars are the best in terms of
            cost of ownsership:
          </Text>
          <CupertinoSwitch
            style={styles.cupertinoSwitch}
            value={this.state.switch}
          />
          <Text style={styles.text} numberOfLines={3} allowFontScaling={false}>
            Do you have a car or reliable method of transport?
          </Text>
          <View style={styles.rect35}>
            <View style={styles.rect11}>
              <View style={styles.rect}>
                <Image
                  style={styles.image}
                  source={{ uri: this.state.imgsrc[0] }}
                />
                <Text style={styles.text3}>{this.state.imgtxt[0]}</Text>
                <Text style={styles.text4}>Rating:</Text>
                <Text style={styles.text5}>{this.state.imgrate[0]}</Text>
              </View>
            </View>
            <View style={styles.rect36}>
              <View style={styles.rect37}>
                <Image
                  style={styles.image2}
                  source={{ uri: this.state.imgsrc[1] }}
                />
                <Text style={styles.text6}>{this.state.imgtxt[1]}</Text>
                <Text style={styles.text7}>Rating:</Text>
                <Text style={styles.text8}>{this.state.imgrate[1]}</Text>
              </View>
            </View>
            <View style={styles.rect38}>
              <View style={styles.rect39}>
                <Image
                  style={styles.image3}
                  source={{ uri: this.state.imgsrc[2] }}
                />
                <Text style={styles.text9}>{this.state.imgtxt[2]}</Text>
                <Text style={styles.text10}>Rating:</Text>
                <Text style={styles.text11}>{this.state.imgrate[2]}</Text>
              </View>
            </View>
            <View style={styles.rect40}>
              <View style={styles.rect41}>
                <Image
                  style={styles.image4}
                  source={{ uri: this.state.imgsrc[3] }}
                />
                <Text style={styles.text12}>{this.state.imgtxt[3]}</Text>
                <Text style={styles.text13}>Rating:</Text>
                <Text style={styles.text14}>{this.state.imgrate[3]}</Text>
              </View>
            </View>
            <View style={styles.rect42}>
              <View style={styles.rect43}>
                <Image
                  style={styles.image5}
                  source={{ uri: this.state.imgsrc[4] }}
                />
                <Text style={styles.text15}>{this.state.imgtxt[4]}</Text>
                <Text style={styles.text16}>Rating:</Text>
                <Text style={styles.text17}>{this.state.imgrate[4]}</Text>
              </View>
            </View>
            <View style={styles.rect44}>
              <View style={styles.rect45}>
                <Image
                  style={styles.image6}
                  source={{ uri: this.state.imgsrc[5] }}
                />
                <Text style={styles.text18}>{this.state.imgtxt[5]}</Text>
                <Text style={styles.text19}>Rating:</Text>
                <Text style={styles.text20}>{this.state.imgrate[5]}</Text>
              </View>
            </View>
            <View style={styles.rect46}>
              <View style={styles.rect47}>
                <Image
                  style={styles.image7}
                  source={{ uri: this.state.imgsrc[6] }}
                />
                <Text style={styles.text21}>{this.state.imgtxt[6]}</Text>
                <Text style={styles.text22}>Rating:</Text>
                <Text style={styles.text23}>{this.state.imgrate[6]}</Text>
              </View>
            </View>
            <View style={styles.rect48}>
              <View style={styles.rect49}>
                <Image
                  style={styles.image8}
                  source={{ uri: this.state.imgsrc[7] }}
                />
                <Text style={styles.text24}>{this.state.imgtxt[7]}</Text>
                <Text style={styles.text25}>Rating:</Text>
                <Text style={styles.text26}>{this.state.imgrate[7]}</Text>
              </View>
            </View>
            <View style={styles.rect50}>
              <View style={styles.rect51}>
                <Image
                  style={styles.image9}
                  source={{ uri: this.state.imgsrc[8] }}
                />
                <Text style={styles.text27}>{this.state.imgtxt[8]}</Text>
                <Text style={styles.text28}>Rating:</Text>
                <Text style={styles.text29}>{this.state.imgrate[8]}</Text>
              </View>
            </View>
            <View style={styles.rect52}>
              <View style={styles.rect53}>
                <Image
                  style={styles.image10}
                  source={{ uri: this.state.imgsrc[9] }}
                />
                <Text style={styles.text30}>{this.state.imgtxt[9]}</Text>
                <Text style={styles.text31}>Rating:</Text>
                <Text style={styles.text32}>{this.state.imgrate[9]}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
  scrollArea: {
    height: 762,

    left: 0,
    position: "absolute",

    top: "6.04%",
    right: 0
  },
  text2: {
    top: 159,
    left: 20,
    width: 241,
    height: 99,
    position: "absolute",
    backgroundColor: "transparent"
  },
  cupertinoSwitch: {
    top: 109,
    left: 299,
    width: 43,
    height: 21,
    position: "absolute"
  },
  text: {
    top: 19,
    left: 22,
    width: 331,
    height: 120,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 32
  },

  ScrollView1: {
    height: 1542,
    width: 374
  },

  ScrollView2: {
    height: 0,
    width: 0
  },
  rect35: {
    top: 220,
    left: 0,
    width: 375,
    height: 419,
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "flex-end",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 10
  },
  rect11: {
    width: 128,
    height: 211,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    margin: 15
  },
  rect: {
    top: 0,
    left: 0,
    width: 128,
    height: 210,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  image: {
    top: 0,
    left: 0,
    width: 130,
    height: 130,
    position: "absolute"
  },
  text3: {
    top: 130,
    left: 8,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text4: {
    top: 170,
    left: 8,
    width: 60,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text5: {
    top: 170,
    left: 68,
    width: 40,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect36: {
    width: 128,
    height: 211,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    margin: 15
  },
  rect37: {
    top: 0,
    left: 0,
    width: 128,
    height: 210,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  image2: {
    top: 0,
    left: 0,
    width: 130,
    height: 130,
    position: "absolute"
  },
  text6: {
    top: 130,
    left: 8,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text7: {
    top: 170,
    left: 8,
    width: 60,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text8: {
    top: 170,
    left: 68,
    width: 40,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect38: {
    width: 128,
    height: 211,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    margin: 15
  },
  rect39: {
    top: 0,
    left: 0,
    width: 128,
    height: 210,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  image3: {
    top: 0,
    left: 0,
    width: 130,
    height: 130,
    position: "absolute"
  },
  text9: {
    top: 130,
    left: 8,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text10: {
    top: 170,
    left: 8,
    width: 60,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text11: {
    top: 170,
    left: 68,
    width: 40,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect40: {
    width: 128,
    height: 211,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    margin: 15
  },
  rect41: {
    top: 0,
    left: 0,
    width: 128,
    height: 210,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  image4: {
    top: 0,
    left: 0,
    width: 130,
    height: 130,
    position: "absolute"
  },
  text12: {
    top: 130,
    left: 8,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text13: {
    top: 170,
    left: 8,
    width: 60,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text14: {
    top: 170,
    left: 68,
    width: 40,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect42: {
    width: 128,
    height: 211,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    margin: 15
  },
  rect43: {
    top: 0,
    left: 0,
    width: 128,
    height: 210,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  image5: {
    top: 0,
    left: 0,
    width: 130,
    height: 130,
    position: "absolute"
  },
  text15: {
    top: 130,
    left: 8,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text16: {
    top: 170,
    left: 8,
    width: 60,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text17: {
    top: 170,
    left: 68,
    width: 40,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect44: {
    width: 128,
    height: 211,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    margin: 15,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20
  },
  rect45: {
    top: 0,
    left: 0,
    width: 128,
    height: 210,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  image6: {
    top: 0,
    left: 0,
    width: 130,
    height: 130,
    position: "absolute"
  },
  text18: {
    top: 130,
    left: 8,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text19: {
    top: 170,
    left: 8,
    width: 60,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text20: {
    top: 170,
    left: 68,
    width: 40,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect46: {
    width: 128,
    height: 211,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    margin: 15,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20
  },
  rect47: {
    top: 0,
    left: 0,
    width: 128,
    height: 210,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  image7: {
    top: 0,
    left: 0,
    width: 130,
    height: 130,
    position: "absolute"
  },
  text21: {
    top: 130,
    left: 8,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text22: {
    top: 170,
    left: 8,
    width: 60,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text23: {
    top: 170,
    left: 68,
    width: 40,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect48: {
    width: 128,
    height: 211,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    margin: 15,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20
  },
  rect49: {
    top: 0,
    left: 0,
    width: 128,
    height: 210,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  image8: {
    top: 0,
    left: 0,
    width: 130,
    height: 130,
    position: "absolute"
  },
  text24: {
    top: 130,
    left: 8,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text25: {
    top: 170,
    left: 8,
    width: 60,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text26: {
    top: 170,
    left: 68,
    width: 40,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect50: {
    width: 128,
    height: 211,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    margin: 15,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20
  },
  rect51: {
    top: 0,
    left: 0,
    width: 128,
    height: 210,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  image9: {
    top: 0,
    left: 0,
    width: 130,
    height: 130,
    position: "absolute"
  },
  text27: {
    top: 130,
    left: 8,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text28: {
    top: 170,
    left: 8,
    width: 60,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text29: {
    top: 170,
    left: 68,
    width: 40,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  rect52: {
    width: 128,
    height: 211,
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    margin: 15,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20
  },
  rect53: {
    top: 0,
    left: 0,
    width: 128,
    height: 210,
    position: "absolute",
    elevation: 60,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 20,
    shadowColor: "rgba(210,210,210,1)",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    overflow: "hidden"
  },
  image10: {
    top: 0,
    left: 0,
    width: 130,
    height: 130,
    position: "absolute"
  },
  text30: {
    top: 130,
    left: 8,
    width: 90,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text31: {
    top: 170,
    left: 8,
    width: 60,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  },
  text32: {
    top: 170,
    left: 68,
    width: 40,
    height: 21,
    position: "absolute",
    backgroundColor: "transparent"
  }
});
