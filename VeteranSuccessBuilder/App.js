import React from "react";
import { YellowBox, AsyncStorage } from "react-native";
import { Provider } from "react-redux";

import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";

import { Font } from "expo";

import { store } from "./src/_helpers";

import Living from "./src/screens/Living";

import { StackNavigator, DrawerNavigator } from "react-navigation";
let user = [
  {
    id: 1,
    username: "Test",
    password: "test",
    email: "Test"
  }
];
const DrawerNavigation = DrawerNavigator({
  Living: {
    screen: Living
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Living: {
      screen: Living
    },
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  storeData = async user => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };
  async componentDidMount() {
    this.storeData(user);
    // AsyncStorage.setItem("user", JSON.stringify(users));
    await Font.loadAsync({
      "Avenir-Medium": require("./src/assets/fonts/Arial.ttf"),
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      "Arial-ItalicMT": require("./src/assets/fonts/Arial_Italic.ttf"),
      ArialMT: require("./src/assets/fonts/Arial.ttf"),
      "Arial-BoldItalicMT": require("./src/assets/fonts/Arial_Bold_Italic.ttf"),
      "Arial-BoldMT": require("./src/assets/fonts/Arial_Bold.ttf")
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? (
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    ) : (
      <Expo.AppLoading />
    );
  }
}
