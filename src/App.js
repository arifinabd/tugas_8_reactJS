import React, { Component } from "react";
import ContentAtas from "./ContentAtas.js";
import ContentBawah from "./ContentBawah.js";

import Header from "./Header.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <ContentAtas />
        <br />
        <br />
        <ContentBawah />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
