import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>IELTS Institute</h5>
            <p>Helping students achieve their dream scores since 2010.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>Courses</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>📍 123 Main Street, Pune, India</p>
            <p>📧 info@ieltsInstitute.com</p>
            <p>📞 +91 1234567890</p>
          </Col>
        </Row>
        <p className="text-center mt-3">&copy; 2025 IELTS Institute. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
