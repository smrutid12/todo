import React from "react";
import "./css/Team.css";
import { Row, Col } from "react-bootstrap";
import abc from "../Images/addtask.svg";
function Team() {
  return (
    <div className="Team d-flex flex-column text-center">
      <Row className="member d-flex flex-row">
        <Col className="member__image">
          <img className="image" src={abc} alt=" " />
        </Col>
        <Col className="member__name mx-sm-auto">
          <h2>Name:-Abc</h2>
          <Col className="member__roll">
            <h4>Rollno:-123</h4>
          </Col>
        </Col>
      </Row>
      <Row className="member d-flex flex-row">
        <Col className="member__image">
          <img className="image" src={abc} alt=" " />
        </Col>
        <Col className="member__name mx-sm-auto">
          <h2>Name:-Abc</h2>
          <Col className="member__roll">
            <h4>Rollno:-123</h4>
          </Col>
        </Col>
      </Row>
      <Row className="member d-flex flex-row">
        <Col className="member__image">
          <img className="image" src={abc} alt=" " />
        </Col>
        <Col className="member__name mx-sm-auto">
          <h2>Name:-Abc</h2>
          <Col className="member__roll">
            <h4>Rollno:-123</h4>
          </Col>
        </Col>
      </Row>
    </div>
  );
}
export default Team;
