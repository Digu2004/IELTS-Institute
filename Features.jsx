import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaMicrophone, FaClipboardCheck, FaRobot, FaBook } from "react-icons/fa";

function Features() {
  const features = [
    { icon: <FaMicrophone size={40} className="text-primary" />, title: "Speaking Practice", desc: "One-on-one sessions to boost fluency." },
    { icon: <FaClipboardCheck size={40} className="text-primary" />, title: "Mock Tests", desc: "Simulated exams to track progress." },
    { icon: <FaRobot size={40} className="text-primary" />, title: "AI Band Score", desc: "Instant evaluation with AI feedback." },
    { icon: <FaBook size={40} className="text-primary" />, title: "Study Materials", desc: "Curated resources for practice." },
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Features</h2>
        <Row>
          {features.map((f, i) => (
            <Col md={3} sm={6} className="mb-4" key={i}>
              <Card className="text-center h-100 shadow-sm feature-card">
                <Card.Body>
                  <div className="mb-3">{f.icon}</div>
                  <Card.Title>{f.title}</Card.Title>
                  <Card.Text>{f.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Features;
