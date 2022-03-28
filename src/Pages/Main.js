import { Tab } from "bootstrap";
import React, { useState } from "react";
import {
  ButtonGroup,
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  Row,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import cloudy from "../assets/icons/clouody.png";
export const Main = () => {
  const [key, setKey] = useState("hourly");
  const [value, setValue] = useState("f");
  const handleChange = (val) => setValue(val);

  const date = new Date();

  return (
    <Container fluid className="text-light">
      <Navbar className="text-light">
        <NavbarBrand>INSTAWEATHER</NavbarBrand>
        {/* to add toggle button */}
        <ToggleButtonGroup
          type="checkbox"
          value={value}
          onChange={handleChange}
        >
          <ToggleButton id="tbg-btn-1" value={"f"}>
            F
          </ToggleButton>
          <ToggleButton id="tbg-btn-2" value={"c"}>
            C
          </ToggleButton>
        </ToggleButtonGroup>
      </Navbar>
      {/* Main container */}
      <Container>
        <Row>
          {/* Location */}
          <Col xs="6">
            <Row>
              <Col xs="12">New Cairo</Col>
              <Col>{`${date.getDate()} ,${date.getMonth()}, ${date.getFullYear()}`}</Col>
              <Col xs="12"></Col>
              <Col xs="12">
                <img src={cloudy} />
              </Col>
            </Row>
          </Col>
          {/* Weather */}
          <Col xs="6">
            <Col>72 deg</Col>
            <Col>81/83</Col>
            <Col>cloud through</Col>
          </Col>
        </Row>
      </Container>
      {/* Tabs */}
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="hourly" title="Hourly"></Tab>
          <Tab eventKey="daily" title="Daily"></Tab>
        </Tabs>
        <Container fluid>{<>Tables</>}</Container>
      </Container>
    </Container>
  );
};
