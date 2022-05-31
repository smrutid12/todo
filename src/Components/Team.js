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
          <h2>Name:-Aakansha Sharma</h2>
          <Col className="member__roll">
            <h4>Rollno:-25</h4>
          </Col>
        </Col>
      </Row>
      <Row className="member d-flex flex-row">
        <Col className="member__image">
          <img className="image" src={abc} alt=" " />
        </Col>
        <Col className="member__name mx-sm-auto">
          <h2>Name:-Aditi P Sahoo</h2>
          <Col className="member__roll">
            <h4>Rollno:-26</h4>
          </Col>
        </Col>
      </Row>
      <Row className="member d-flex flex-row">
        <Col className="member__image">
          <img className="image" src={abc} alt=" " />
        </Col>
        <Col className="member__name mx-sm-auto">
          <h2>Name:-Ritish Ghadei</h2>
          <Col className="member__roll">
            <h4>Rollno:-27</h4>
          </Col>
        </Col>
      </Row>
      <Row className="member d-flex flex-row">
        <Col className="member__image">
          <img className="image" src={abc} alt=" " />
        </Col>
        <Col className="member__name mx-sm-auto">
          <h2>Name:-Sristi Tamang</h2>
          <Col className="member__roll">
            <h4>Rollno:-30</h4>
          </Col>
        </Col>
      </Row>
      <Row className="member d-flex flex-row">
        <Col className="member__image">
          <img className="image" src={abc} alt=" " />
        </Col>
        <Col className="member__name mx-sm-auto">
          <h2>Name:-Aditya Sahu </h2>
          <Col className="member__roll">
            <h4>Rollno:-31</h4>
          </Col>
        </Col>
      </Row>
      <Row className="member d-flex flex-row">
        <Col className="member__image">
          <img className="image" src={abc} alt=" " />
        </Col>
        <Col className="member__name mx-sm-auto">
          <h2>Name:-Saroj Kumar Marei</h2>
          <Col className="member__roll">
            <h4>Rollno:-33</h4>
          </Col>
        </Col>
      </Row>
      <Row className="member d-flex flex-row">
        <Col className="member__image">
          <img className="image" src={abc} alt=" " />
        </Col>
        <Col className="member__name mx-sm-auto">
          <h2>Name:-Ashim Mahapatro</h2>
          <Col className="member__roll">
            <h4>Rollno:-34</h4>
          </Col>
        </Col>
      </Row>
    </div>
  );
}
export default Team;
