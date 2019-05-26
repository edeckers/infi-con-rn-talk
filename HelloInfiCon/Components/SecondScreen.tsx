import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class SecondScreen extends Component {
  public render = () => (
    <View style={styles.container}>
      <Text>This is the second screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  }
});
