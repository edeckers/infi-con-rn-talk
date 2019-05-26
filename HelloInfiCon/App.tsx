import React, { Component } from "react";
import { Scene, Router, Stack } from "react-native-router-flux";

import MainScreen from "./Components/MainScreen";
import SecondScreen from "./Components/SecondScreen";

export default class App extends Component<{}> {
  public render = () => (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="login" component={MainScreen} title="Main" initial={true} />
        <Scene key="second" component={SecondScreen} title="Second" />
      </Stack>
    </Router>
  );
}
