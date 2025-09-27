import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <section className="pt-5 mt-5 bg-light">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4">Achieve Your Dream IELTS Band</h1>
            <p className="lead mt-3">
              Expert coaching, AI-powered practice, and personalized guidance to help you crack IELTS with confidence.
            </p>
            <Button variant="primary" size="lg">Get Started</Button>
          </Col>
          <Col md={6}>
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.z0BD2H5tM_8DWKBP2L78UwHaE6?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="IELTS Preparation"
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
