import { Component } from "react";
import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

export default class Welcome extends Component {
  public render = () => (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../Images/infi.png")}
      />
      <Text style={styles.welcome}>
        Welcome to <Text style={{ fontWeight: "bold" }}>InfiCon</Text>!
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center"
  }
});
