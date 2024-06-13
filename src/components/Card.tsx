import React from "react";
import { Col } from "react-bootstrap";

export const Card = ({ message, name, kaiyaStyle, image_link }) => {
  const italicTextStyle = kaiyaStyle;

  return (
    <Col lg={6} md={12}>
      <div className="d-flex flex-column flex-md-row align-items-center">
        <img
          src={image_link}
          className="ms-5 rounded-circle mb-4 mb-md-0 shadow-2"
          width="90"
          height="90"
          alt="User"
        />
        <div className="ms-4 ps-md-3 col me-4">
          <span style={italicTextStyle}>{message}</span>
          <br />
          <span className="blockquote-footer mb-0" style={{ color: 'white', fontStyle: 'italic' }}>{name}</span>


        </div>
      </div>
    </Col>
  );
};
