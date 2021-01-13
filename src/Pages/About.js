import { Component } from "react";
import Bottombar from "../Component/Botombar";
import Navibar from "../Component/Navibar";


export default class About extends Component {
  render() {
    return (
      <>
        <Navibar />
        <div>
          About Nich
      </div>
        <Bottombar />
      </>
    );
  }
}