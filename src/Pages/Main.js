import axios, { Axios } from "axios";
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
  const mock = {
    coord: {
      lon: 29.5705,
      lat: 30.8548,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 20.77,
      feels_like: 20.18,
      temp_min: 20.77,
      temp_max: 20.77,
      pressure: 1025,
      humidity: 49,
    },
    visibility: 10000,
    wind: {
      speed: 4.12,
      deg: 350,
    },
    clouds: {
      all: 0,
    },
    dt: 1648470822,
    sys: {
      type: 1,
      id: 2512,
      country: "EG",
      sunrise: 1648439750,
      sunset: 1648484258,
    },
    timezone: 7200,
    id: 358333,
    name: "Dawwār Abū al ‘Āşī",
    cod: 200,
  };
  const [key, setKey] = useState("hourly");
  const [value, setValue] = useState("f");
  const handleChange = (val) => setValue(val);
  const [weatherData, setWeatherData] = useState();
  const date = new Date();

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    axios.defaults.headers = {
      "Access-Control-Allow-Origin": "*",
    };

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=ffe4950e60a08e7fb31d118c565ed86c&units=metric
        `,
        {}
      )
      .then((res) => setWeatherData(res.data));
  }

  function error() {}
  useEffect(() => {
    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    return () => {};
  }, []);
  // useEffect(() => {

  // }, [weatherData]);
  return (
    <Container className="text-light">
      <Navbar>
        <NavbarBrand className="text-light me-auto fw-bold">
          INSTAWEATHER
        </NavbarBrand>
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
              <Col xs="12">{weatherData?.weather[0].main}</Col>
            </Row>
          </Col>
          {/* Weather */}
          <Col xs="6">
            <Col className="fs-3">{weatherData?.main.temp}</Col>
            <Col>81° /83° </Col>
            <Col>{weatherData?.weather[0].description}</Col>
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
            </Row>
          }
        </Container>
      </Container>
    </Container>
  );
};
