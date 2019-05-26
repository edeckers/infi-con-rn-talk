import { Component } from "react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./Welcome";
import { WhereContext } from "../Contexts/WhereContext";

interface State {
  count: number;
}

const buildWelcome = (where: string) => <Welcome where={where} />;

export default class FancyCounter extends Component<{}, State> {
  public constructor(props: {}) {
    super(props);

    this.state = { count: 0 };
  }

  public render = () => (
    <View onTouchStart={this.increment} style={styles.container}>
      <WhereContext.Consumer>{buildWelcome}</WhereContext.Consumer>
      <Text>Counted clicks: {this.state.count}</Text>
    </View>
  );

  private increment = () => this.setState({ count: this.state.count + 1 });
}
const styles = StyleSheet.create({
  container: { alignItems: "center" },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: "center"
  }
});
