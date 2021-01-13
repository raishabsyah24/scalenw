import { Component } from "react";
import { Button, Container } from '@material-ui/core';
import logo from "./logo/backkground.jpg";


export default class Splash extends Component {
  render() {
    return (
      <>
      <Container style={{backgroundImage:`url(${logo})`,height:800,textAlign:"center",justifyContent:"center"}}>
      <Button variant="contained" color="primary">
      <a class="nav-link active" aria-current="page" href="/home">Klik Info Lebih Lanjut</a>
    </Button>
      </Container>
      </>
    );
  }
}