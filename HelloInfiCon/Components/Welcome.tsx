import { Component } from "react";
import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";

interface Props {
  where: string;
}

export default class Welcome extends Component<Props> {
  public render = () => (
    <View style={styles.container}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../Images/infi.png")}
      />
      <Text style={styles.welcome}>
        Welcome to{" "}
        <Text style={{ fontWeight: "bold" }}>{this.props.where}</Text>!
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
