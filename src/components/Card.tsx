import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Card = ({ message, name, kaiyaStyle, image_link }) => {
  const italicTextStyle = kaiyaStyle;

  return (
    <Col lg={6}>
      <div className="flex-shrink-0 align-items-center d-flex w-100">
        <img
          src={image_link}
          className="ms-5 rounded-circle mb-4 mb-lg-0 shadow-2 m"
          width="90"
          height="90"
        />
        <div className="flex-grow-1 ms-4 ps-3 col me-4">
          <span style={italicTextStyle}>{message}</span>
          <br />
          <span className="blockquote-footer mb-0">{name}</span>
        </div>
      </div>
    </Col>
  );
};
