import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import FancyCounter from "./Components/FancyCounter";
import { WhereContext } from "./Contexts/WhereContext";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component<{}> {
  public render = () => (
    <WhereContext.Provider value="InfiContext">
      <View style={styles.container}>
        <FancyCounter />
        <Text style={styles.instructions}>To get started, edit App.tsx</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    </WhereContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  },
  instructions: {
    textAlign: "center",
    color: "#ffffff",
    marginBottom: 5
  }
});
