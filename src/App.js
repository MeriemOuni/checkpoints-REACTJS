import './App.css';
import {Navbar, Nav, Form, Button, Carousel, Card, CardDeck} from 'react-bootstrap';

function App() {
  return (
    <div >
      <Navbar className="navi" sticky="top">
    <Navbar.Brand className="logo" href="#home">BLUE WAVES</Navbar.Brand>
    <Nav className="mx-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Reservation</Nav.Link>
      <Nav.Link href="#home">Pricelist</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="outline-info">Sign in</Button>
    </Form>
  </Navbar>

      

      <Carousel className="carous">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://explorateurvoyages.com/wp-content/uploads/2016/10/explorateur.com-explorateur-voyages-GRECE-Justin-Black-entete.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpaperaccess.com/full/1113470.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://dessinemoiunvoyage.com/wp-content/uploads/2015/12/Voyage-en-Grece-sur-mesure-1920-x-800.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      <div className="intro">
          <h1 className="titre">Our Apartments in Santorini</h1>
          <p className="parg">Blue Waves hotel is located only 30 meters away from Kamari Beach, 
            one of the most famous and stunning beaches of Santorini. 
            Picturesque and with a minimal yet elegant decoration influenced by the traditional Cycladic architecture, 
            with breathtaking views to the Aegean Sea and the infamous sunset, Blue Waves is among the top Santorini luxury hotels, 
            making it the ideal option for people who seek for tranquility, 
            polite and friendly service as well as high-quality standards.</p>
      </div>

      <CardDeck >
  <Card className="cards">
    <Card.Img className="imcard" variant="top" src="https://i.pinimg.com/originals/52/0a/f6/520af622eff7997e354fce400a6bcaa7.jpg" />
    <Card.Body className="cardbody">
      <Card.Title>Single Room</Card.Title>
      <Card.Text>
        This air-conditioned apartment opens onto a balcony overlooking the mountain. 
        It has a kitchenette with dining area, refrigerator and cooking hobs. 
        The private bathroom has a bathtub and is equipped with a hairdryer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className="cardbut" variant="secondary">Discover more</Button>
    </Card.Footer>
  </Card>
  <Card className="cards">
    <Card.Img className="imcard" variant="top" src="https://www.opodo.fr/blog/wp-content/uploads/sites/16/2017/02/Publication-Instagram-par-Mystique-Hotel-Santorini.jpg" />
    <Card.Body className="cardbody">
      <Card.Title>Couple Room</Card.Title>
      <Card.Text>
        Offering a private jacuzzi, this air-conditioned and modernly decorated suite opens onto a 
        furnished balcony overlooking the deep blue Aegean Sea. 
        It has a living room with a flat-screen satellite TV and a kitchenette with a mini fridge.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className="cardbut" variant="secondary">Discover more</Button>
    </Card.Footer>
  </Card>
  <Card className="cards">
    <Card.Img className="imcard" variant="top" src="https://i.pinimg.com/originals/53/f4/0d/53f40dc1863172d8afddd9bf24d12a0c.jpg" />
    <Card.Body className="cardbody">
      <Card.Title>Suite Room</Card.Title>
      <Card.Text>
        The chic and contemporary design, the luxurious outdoor spa bath and bedroom, 
        the stylish sitting room and dining area, the magnificent bathroom with 
        the shower and the private veranda with a view to the jacuzzi, 
        make your staying in our Deluxe Suite the experience of a lifetime.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button className="cardbut" variant="secondary">Discover more</Button>
    </Card.Footer>
  </Card>
</CardDeck>

    <Form className="forms">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        <div className="footer">
           <p> © 2021 Copyright: </p>
            <a class="text-dark" href="http://www.bluewaveshotel.gr/">BLUEWAVESHOTEL.GR</a>

        </div>


    </div>

    
    

    
  );
}

export default App;
