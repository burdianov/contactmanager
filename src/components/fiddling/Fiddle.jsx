import React, { Component } from "react";

class Fiddle extends Component {
  state = {};
  componentWillMount() {
    console.log("componentWillMount...");
  }

  componentDidMount() {
    console.log("componentDidMount...");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate...");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate...");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps...");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate...");
  }

  render() {
    console.log("render...");
    return (
      <div>
        <h1>Fiddle</h1>
      </div>
    );
  }
}

export default Fiddle;
