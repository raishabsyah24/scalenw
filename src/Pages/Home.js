import {Component} from "react";
import {Button}  from '@material-ui/core';
import logo from "../logo/backkground.jpg";
import Bottombar from "../Component/Botombar";
import Navibar from "../Component/Navibar";


export default class Home extends Component {
  render() {
    return (
    <>
      <div style={{ backgroundColor: "white", textAlign: "center", gridRow: "row", borderSpacing: "20px", backgroundImage: `url(${logo})`,WebkitBackgroundSize:430 }}>
      <Navibar />
        <div>
          <div>
            <h1 style={{color:"white"}}>Selamat Datang, Apa Carik Kak ???????</h1>
          </div>
        <table class="table" style={{ color: "white" }}>
          <thead>
            <tr>
              <th scope="col">Harga Paket</th>
              <th scope="col">Brand Camera</th>
              <th scope="col">Brand NVR</th>
              <th scope="col">Brand HardDisk</th>
              <th scope="col">Cable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Paket 4 Camera</th>
              <td>4 IP HIKVISION POE</td>
              <td>NVR HIKVISION 4 Channel</td>
              <td>HDD Seagate 1 TB</td>
              <td>LAN UTP CAT 5</td>
            </tr>
            <tr>
              <th scope="row">Paket 8 Camera</th>
              <td>8 IP HIKVISION POE</td>
              <td>NVR HIKVISION 8 Channel</td>
              <td>HDD SEAGATE 1 TB</td>
              <td>LAN UTP CAT 5</td>
            </tr>
            <tr>
              <th scope="row">Paket 16 Camera</th>
              <td>16 IP HIKVISION</td>
              <td>NVR HIKVISION 16 Channel</td>
              <td>HDD SEAGATE 2 TB</td>
              <td>LAN UTP CAT 5</td>
            </tr>
            <tr>
              <th scope="row">Fitur Spesial</th>
              <td>Garansi 1 Tahun</td>
              <td>Gratis Material</td>
              <td>Gratis Pemeliharan Perangkat</td>
              <td>Bebas Pilih Camera InDoor/OutDoor</td>
            </tr>
          </tbody>
        </table>
        <Button href="/product" style={{backgroundColor:"#6495ED", color:"white"}}>
          Klik Info Lebih Lanjut
    </Button>
      </div>
      <Bottombar />
      </div>
    </>
  );
}
}