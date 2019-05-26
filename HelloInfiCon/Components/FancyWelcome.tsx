import { Component } from "react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./Welcome";

interface Props {
  where: string;
}

interface State {
  count: number;
}

export default class FancyWelcome extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = { count: 0 };
  }

  public render = () => (
    <View onTouchStart={this.increment} style={styles.container}>
      <Welcome where={this.props.where} />
      <Text>Counted clicks: {this.state.count}</Text>
    </View>
  );

  private increment = () => this.setState({ count: this.state.count + 1 });
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
