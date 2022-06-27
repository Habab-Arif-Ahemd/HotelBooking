import React from "react";
import { Row } from "react-bootstrap";
import Hotel from "../../shared/Hotel";
import "../../App.css";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Maps from "../Map/MapS";
import './Hotel-view.css'
export default function HotelView() {
  console.log("dddd", Hotel);

  return (
    <div class="container">
    <div class="row">
      <div class="col">
        1 of 2
  

      </div>
      <div class="col">
        2 of 2
      </div>
    </div>
    <div class="row">
      <div class="col-2"> 
      <div className="row " >     <Maps /> </div>
        <div className="row side-row"> 
        <label> Popular Filters </label> 

          </div>
        <div className="row side-row">    
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="1" id="defaultCheck1"/>
        <label > Free airport shuttle</label>
        </div> 
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="1" id="defaultCheck2"/>
          <label > Free airport shuttle</label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="1" id="defaultCheck3"/>
          <label > Free airport shuttle</label>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="1" id="defaultCheck3"/>
          <label > Free airport shuttle</label>
          </div>
         </div>



         <div className="row side-row">
 


         </div>
      </div>
      <div class="col-6">
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
       
            ))}
          </Row>      </div>
      <div class="col">
        3 of 3
      </div>
    </div>
  </div>
  );
}
