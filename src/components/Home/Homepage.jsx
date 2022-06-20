import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import background from "../../Assets/background.jpg";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Country from "../../shared/Country"
export default function Home() { 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const  [roomCounter, setroomCounter]  =useState(1)
  const [Adults,AsetAdultes]=useState(1);
  const [childer,setChildern]=useState(0);
        //the room conter       
        const increaseRoom =()=>{
          console.log("ddd",Country)
          if(roomCounter<8)
          setroomCounter(count=>count+1)
        }
        const decreaseRoom=()=>{

          if (roomCounter > 0) 
            setroomCounter(conut=>conut-1)
        }
        const resetCounter=()=>{
          setroomCounter(0)
        }

        //childer conuter
        const increasechilder =()=>{
          if(childer<20)
          setChildern(count=>count+1)
        }
        const decreasechilder=()=>{

          if (childer > 0) 
          setChildern(conut=>conut-1)
        }

        //adulit counter
        const increaseAdulit =()=>{
          if(Adults<9)
          AsetAdultes(count=>count+1)
        }
        const decreaseAdulit=()=>{

          if (Adults > 0) 
          AsetAdultes(conut=>conut-1)
        }




        
  return (
    <Container className="row">
      <Row>
                <img src={background} className="backgroun-img"></img>
        
      </Row>
      <Row class="card text-left">
        <Card className="m-2 p-2">
          <Row>
          <Col>

              <Form.Group className="mb-3" controlId="Check-in">
                <Form.Label>Destination</Form.Label>
                <Form.Select aria-label="Default select example">
  <option>Select City</option>

  {Country.country.map((city)=>
  <option value={city.CountryName} key={city.Country_id} > {city.CountryName}</option>
  )
    
  }
</Form.Select>          
    </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3" controlId="Check-in">
                <Form.Label>Check-in</Form.Label>
                <Form.Control type="date" placeholder="Check-in" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group className="mb-3 " controlId="Check-out">
                <Form.Label>Check-out</Form.Label>
                <Form.Control type="date" placeholder="Check-out" />
              </Form.Group>
            </Col>
            <Col> 
            <Form.Group    className="mb-3" controlId="Guest">
              <Form.Label> Number of Guest &  Room </Form.Label>
                        
              <Form.Select  type="input"  label="Check me out"   onClick={handleShow}  >
              <option> Number of Guest & Room</option>
              </Form.Select>
            </Form.Group>
            </Col>
    
            <Col xl={8}>
              <Button className="al-button" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Card>

        <Col></Col>

        <Col></Col>
        <Col></Col>
      </Row>

      {/* model for guest number  */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Guest And Room </Modal.Title>
        </Modal.Header>
        {
        console.log("dddddddddd")
        
        }{roomCounter}
        
        <Modal.Body >
  
<label>Adults :</label>
<button onClick={increaseAdulit}  className="pluseButton"> +</button>
{Adults}
<button onClick={decreaseAdulit} className="pluseButton">- </button>

<label>Children :</label>
<button onClick={increasechilder}  className="pluseButton"> +</button>
{childer}
<button onClick={decreasechilder} className="pluseButton">- </button>
<FontAwesomeIcon icon="coffee" size="xl"  />
<button onClick={increaseRoom} className="RoomBotton "> <FontAwesomeIcon icon={faPlusCircle}/>  {roomCounter} Rooms</button>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={resetCounter}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
