import React, { Component } from "react";

import Username from "../symbols/Username";
import Password from "../symbols/Password";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
  ImageBackground,
  Image
} from "react-native";

import { connect } from "react-redux";
import { Center } from "@builderx/utils";
import Button1 from "../symbols/button1";

import { userActions } from "../_actions";

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false,
      usenameError: false,
      passwordError: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, name) {
    this.setState({ [name]: e });
  }
  validateValues(e, name) {
    switch (name) {
      case "usename":
        let usename = !/^[A-Za-z0-9 ]{2,20}$/.test(e);
        this.setState({ usenameError: usename });
        break;
      case "password":
        let password = !/^[a-zA-Z0-9._%+-~`@!? ]{4,20}$/.test(e);
        this.setState({ passwordError: password });
        break;
      default:
        break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password, this.props.navigation));
    } else Alert.alert("Failed", "Enter Valid Username and Password");
  }
  render() {
    const { username, password, submitted } = this.state;
    let usenameError = this.state.usenameError ? "Invalid Username" : "";
    let passwordError = this.state.passwordError ? "Invalid Password" : "";
    return (
      <View style={styles.root}>
        <StatusBar barStyle="dark-content" style={styles.statusBar} />
        <ImageBackground
          style={styles.rect}
          source={require("../assets/Gradient_kFVrAlw.png")} /*gradient: {"activeIndex":1,"from":{"x":0.5,"y":0},"gradientType":"LinearGradient","shouldSmoothenOpacity":false,"stops":[{"offset":0,"stopColor":"rgba(156,217,255,1)","style":{}},{"offset":1,"stopColor":"rgba(255,255,255,1)","style":{}}],"style":{},"to":{"x":0.5,"y":1}}*/
        />
        <Text style={styles.text}>Veteran</Text>
        <View style={styles.login}>
          <Username
            style={styles.username}
            errorText={usenameError}
            onChangeText={e => this.handleChange(e, "username")}
            onBlur={() => this.validateValues(this.state.username, "usename")}
          />
          <Password
            style={styles.username2}
            textInput="Password"
            iconType="MaterialCommunityIcons"
            iconName="lock-outline"
            errorText={passwordError}
            onChangeText={e => this.handleChange(e, "password")}
            onBlur={() => this.validateValues(this.state.password, "password")}
          />
        </View>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            this.props.navigation.push("SignUp");
          }}
        >
          <Text style={styles.notSetUpYet}>Not set up yet?</Text>
          <Text style={styles.signUp1}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.text2}>Success</Text>
        <Center horizontal>
          <Button1
            style={styles.button1}
            buttonContent="Sign in"
            root={() => {
              this.props.navigation.push("Living");
            }}
          />
        </Center>
        <Center horizontal>
          <Text style={styles.text3}>Built With:</Text>
        </Center>
        <Image
          source={require("../assets/1_eSQnSxgOwNWtjsnbBl3w4A.png")}
          style={styles.image}
        />
        <Image
          source={require("../assets/5842a962a6515b1e0ad75b04.png")}
          style={styles.image2}
        />
        <Image
          source={require("../assets/cfe32a47d61a3b280904d41dd1eb5d1f.png")}
          style={styles.image3}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state
});

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },

  login: {
    position: "absolute",
    left: 23,
    height: 166,
    right: 24,
    bottom: "36.45%"
  },

  button2: {
    position: "absolute",
    left: 93,

    right: 93,
    bottom: "6%"
  },
  notSetUpYet: {
    position: "absolute",
    top: "10.53%",
    left: "0.00%",
    opacity: 0.5,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    letterSpacing: -0.22
  },
  signUp1: {
    position: "absolute",
    top: "4.55%",
    left: "55.5%",
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: -0.22
  },
  username: {
    position: "absolute",
    // top: "-7.14%",
    left: "0%",
    height: "29.94%",
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    top: 0
  },

  text: {
    top: "12.44%",
    position: "absolute",
    backgroundColor: "transparent",
    fontStyle: "italic",
    fontSize: 90,
    color: "rgba(80,80,80,1)",
    left: 10
  },
  username2: {
    left: "0%",
    top: "49.7%",
    height: "29.94%",
    width: "100%",
    position: "absolute",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    overflow: "visible"
  },
  text2: {
    top: "23.4%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 90,
    fontStyle: "italic",
    color: "rgba(50,150,210,1)",

    width: 361,
    left: "2.67%"
  },
  statusBar: {},
  button1: {
    top: 679.89,
    position: "absolute",
    height: 44
  },
  rect: {
    top: 520,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    transform: [
      {
        rotate: "-179.55deg"
      }
    ]
  },
  text3: {
    height: 20,
    width: 100,
    top: 510,
    position: "absolute",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(133,133,133,1)"
  },
  image: {
    height: 60,
    width: 140,
    position: "absolute",
    left: "13.33%",
    top: "65.27%"
  },
  image2: {
    height: 31,
    width: 148,
    position: "absolute",
    top: "73.89%",
    left: "29.87%"
  },
  image3: {
    height: 43,
    width: 147,
    position: "absolute",
    top: "66.32%",
    left: "48%"
  }
});
