import React, { Component } from 'react';
import logo from './logo.svg';
import SimpleInlineToolbarEditor from "./SimpleInlineToolbarEditor";

import styled from "styled-components";


class App extends Component {
  render() {
    return (
      <div style={{padding:50}}>
          <SimpleInlineToolbarEditor />
      </div>
    );
  }
}

export default App;
