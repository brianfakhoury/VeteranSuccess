import React from "react";
import { YellowBox, AsyncStorage } from "react-native";
import { Provider } from "react-redux";

import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";

import { Font } from "expo";

import { store } from "./src/_helpers";

import Living from "./src/screens/Living";

import Entertainment from "./src/screens/Entertainment";

import Car from "./src/screens/Car";
import House from "./src/screens/House";
import Finances from "./src/screens/Finances";
import Career from "./src/screens/Career";
import Love from "./src/screens/Love";
import { StackNavigator, DrawerNavigator } from "react-navigation";
let user = [
  {
    id: 1,
    username: "Test",
    password: "test",
    email: "Test"
  }
];

console.disableYellowBox = true;

const DrawerNavigation = DrawerNavigator({
  Living: {
    screen: Living
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  Entertainment: {
    screen: Entertainment
  },
  Car: {
    screen: Car
  },
  House: {
    screen: House
  },
  Finances: {
    screen: Finances
  },
  Career: {
    screen: Career
  },
  Love: {
    screen: Love
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
    },
    Entertainment: {
      screen: Entertainment
    },
    Car: {
      screen: Car
    },
    House: {
      screen: House
    },
    Finances: {
      screen: Finances
    },
    Career: {
      screen: Career
    },
    Love: {
      screen: Love
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
      "Arial-ItalicMT": require("./src/assets/fonts/Arial_Italic.ttf"),
      "Arial-BoldItalicMT": require("./src/assets/fonts/Arial_Bold_Italic.ttf"),
      "Arial-BoldMT": require("./src/assets/fonts/Arial_Bold.ttf")
    });

    this.setState({ fontLoaded: true });
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
