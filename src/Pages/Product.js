import { Component } from "react";
import Bottombar from "../Component/Botombar";
import Navibar from "../Component/Navibar";
import {
  Card
} from "react-bootstrap";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import hik1 from "../logo/hik-1.jpg";
import hik2 from "../logo/hik-2.jpg";
import hik3 from "../logo/hik-3.png";
import hik4 from "../logo/hik-4.jpg";
import channel1 from "../logo/channel-1.jpg";
import channel2 from "../logo/channel-2.png";
import channel3 from "../logo/channel-3.jpg";
import cat5 from "../logo/cat6.jpg";


export default class Product extends Component {
  render() {
    return (
      <>
        <Navibar />
        <div class="Container" style={{margin:20}}>
          <div class="row">
            <div style={{padding:12}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={hik1} height="200px"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Card.Body style={{ textAlign: "right" }}>
                  <FavoriteBorderIcon style={{ marginRight: 20 }} />
                  <Card.Link href="#">To Cart</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div style={{padding:12}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={hik2} height="200px"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Card.Body style={{ textAlign: "right" }}>
                  <FavoriteBorderIcon style={{ marginRight: 20 }} />
                  <Card.Link href="#">To Cart</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div style={{padding:12}}> 
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={hik3} height="200px"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Card.Body style={{ textAlign: "right" }}>
                  <FavoriteBorderIcon style={{ marginRight: 20 }} />
                  <Card.Link href="#">To Cart</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div style={{padding:12}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={hik4} height="200px"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Card.Body style={{ textAlign: "right" }}>
                  <FavoriteBorderIcon style={{ marginRight: 20 }} />
                  <Card.Link href="#">To Cart</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div class="Column">
            <div class="row">
            <div style={{padding:12}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={channel1} height="200px"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Card.Body style={{ textAlign: "right" }}>
                  <FavoriteBorderIcon style={{ marginRight: 20 }} />
                  <Card.Link href="#">To Cart</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div style={{padding:12}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={channel2} height="200px"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Card.Body style={{ textAlign: "right" }}>
                  <FavoriteBorderIcon style={{ marginRight: 20 }} />
                  <Card.Link href="#">To Cart</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div style={{padding:12}}> 
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={channel3} height="200px"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Card.Body style={{ textAlign: "right" }}>
                  <FavoriteBorderIcon style={{ marginRight: 20 }} />
                  <Card.Link href="#">To Cart</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div style={{padding:12}}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cat5} height="200px"/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
    </Card.Text>
                </Card.Body>
                <Card.Body style={{ textAlign: "right" }}>
                  <FavoriteBorderIcon style={{ marginRight: 20 }} />
                  <Card.Link href="#">To Cart</Card.Link>
                </Card.Body>
              </Card>
            </div>
            </div>
          </div>
        </div>
        <Bottombar />
      </>
    );
  }
}