import React from "react";
import { useLocation } from "react-router-dom";
import Container from "./Container";

const BreadCrumb = () => {
  const path = useLocation().pathname;

  const location = path.split("/")[1];

  return (
    <>
      <Container>
        <div className="flex gap-4">
          <h5>Home</h5>
          <h5>/</h5>
          <h5>{location}</h5>
        </div>
      </Container>
    </>
  );
};

export default BreadCrumb;
