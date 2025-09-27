import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Testimonials() {
  const testimonials = [
    { name: "Amit Sharma", text: "Thanks to IELTS Institute, I scored Band 8! Mock tests felt exactly like the real exam." },
    { name: "Sophia Lee", text: "The AI Band Score feature really helped me track my progress. Highly recommended!" },
    { name: "Rahul Patil", text: "Amazing speaking practice sessions. My confidence improved a lot." },
  ];

  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">What Our Students Say</h2>
        <Row>
          {testimonials.map((t, i) => (
            <Col md={4} className="mb-3" key={i}>
              <Card className="h-100 shadow-sm student-card">
                <Card.Body>
                  <Card.Text>“{t.text}”</Card.Text>
                  <Card.Subtitle className="mt-3 text-primary">- {t.name}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
