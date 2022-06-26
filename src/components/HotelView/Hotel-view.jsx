import React from "react";
import { Row } from "react-bootstrap";
import Hotel from "../../shared/Hotel";
import "../../App.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Maps from "../Map/MapS";

export default function HotelView() {
  console.log("dddd", Hotel);
  const render = (status) => {
    return <h1>{status}</h1>;
  };
  
  return (
    <div>

<Wrapper apiKey={"AIzaSyBQynbfj6dHF89mD4nF03WAIhUmFXyo4Zk"} render={render}>
<Maps/>

</Wrapper>


      <Row xl={1} md={6} className="g-4">
        {Array.from(Hotel).map((a) => (
          <div className="card">
            <div class="card pt-5">
              <div class="card-header">
                <h6> {a.HotelName}</h6>
              </div>
              <div class="row card-body">
                <div className="col-2">
                  <img src={a.HotelImage[0]} class="card-img"></img>
                </div>
                <div className="col-4">
                  <div className="row" class="card-title">
                    {" "}
                    {a.HotelName}
                  </div>
                  <div className="row"> {a.HotelReview}</div>
                </div>

                <div></div>
              </div>
            </div>
          </div>
          /*     <Col>
      <Card  style={{ width: '40rem' ,margin:"1rem"}}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col> */
        ))}
      </Row>
    </div>
  );
}
