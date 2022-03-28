import axios from "axios";
import { Tab } from "bootstrap";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Stack,
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

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    axios.defaults.headers = {
      "Access-Control-Allow-Origin": "*",
    };
   
    axios
      .get(
        `https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/${latitude},${longitude}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
          },
          proxy: {
            host: "http://localhost",
            port: 3000,
          },
        }
      )
      .then((res) => console.log(res));
 
  }

  function error() {}
  useEffect(() => {
    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    return () => {};
  }, []);
  return (
    <Container className="text-light">
      <Navbar>
        <NavbarBrand className="text-light me-auto">INSTAWEATHER</NavbarBrand>
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
      <Container className="p-5">
        <Row>
          {/* Location */}
          <Col xs="6">
            <Row>
              <Col xs="12" className="fs-3 ">
                New Cairo
              </Col>
              <Col>{`${date.getDate()} ,${date.getMonth()}, ${date.getFullYear()}`}</Col>
              <Col xs="12"></Col>
              <Col xs="12">
                <img src={cloudy} alt="" />
              </Col>
              <Col xs="12">Cloudy</Col>
            </Row>
          </Col>
          {/* Weather */}
          <Col xs="6">
            <Col className="fs-3">72 °</Col>
            <Col>81° /83° </Col>
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
        <Container fluid>
          {
            <Row>
              <Stack
                gap={3}
                style={{ width: "3rem" }}
                className="d-flex align-items-center"
              >
                <div>10:00 </div>
                <img
                  src={cloudy}
                  style={{ width: "3rem" }}
                  className=""
                  alt=""
                />
                <div>81 deg</div>
              </Stack>
              <Stack
                gap={3}
                style={{ width: "3rem" }}
                className="d-flex align-items-center"
              >
                <div>10:00 </div>
                <img
                  src={cloudy}
                  style={{ width: "3rem" }}
                  className=""
                  alt=""
                />
                <div>81 deg</div>
              </Stack>
              <Stack
                gap={3}
                style={{ width: "3rem" }}
                className="d-flex align-items-center"
              >
                <div>10:00 </div>
                <img
                  src={cloudy}
                  style={{ width: "3rem" }}
                  className=""
                  alt=""
                />
                <div>81 deg</div>
              </Stack>
              <Stack
                gap={3}
                style={{ width: "3rem" }}
                className="d-flex align-items-center"
              >
                <div>10:00 </div>
                <img
                  src={cloudy}
                  style={{ width: "3rem" }}
                  className=""
                  alt=""
                />
                <div>81 deg</div>
              </Stack>
              <Stack
                gap={3}
                style={{ width: "3rem" }}
                className="d-flex align-items-center"
              >
                <div>10:00 </div>
                <img
                  src={cloudy}
                  style={{ width: "3rem" }}
                  className=""
                  alt=""
                />
                <div>81 deg</div>
              </Stack>
              <Stack
                gap={3}
                style={{ width: "3rem" }}
                className="d-flex align-items-center"
              >
                <div>10:00 </div>
                <img
                  src={cloudy}
                  style={{ width: "3rem" }}
                  className=""
                  alt=""
                />
                <div>81 deg</div>
              </Stack>
              <Stack
                gap={3}
                style={{ width: "3rem" }}
                className="d-flex align-items-center"
              >
                <div>10:00 </div>
                <img
                  src={cloudy}
                  style={{ width: "3rem" }}
                  className=""
                  alt=""
                />
                <div>81 deg</div>
              </Stack>
              <Stack
                gap={3}
                style={{ width: "3rem" }}
                className="d-flex align-items-center"
              >
                <div>10:00 </div>
                <img
                  src={cloudy}
                  style={{ width: "3rem" }}
                  className=""
                  alt=""
                />
                <div>81 deg</div>
              </Stack>
              <Stack
                gap={3}
                style={{ width: "3rem" }}
                className="d-flex align-items-center"
              >
                <div>10:00 </div>
                <img
                  src={cloudy}
                  style={{ width: "3rem" }}
                  className=""
                  alt=""
                />
                <div>81 deg</div>
              </Stack>
            </Row>
          }
        </Container>
      </Container>
    </Container>
  );
};
