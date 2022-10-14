import React from "react";

const Section = (props) => {
  return <div className="section">{props.children}</div>;
};
export const SectionTitle = (props) => {
  return (
    <div className="section__title">
      <h1>{props.children}</h1>
    </div>
  );
};
export const SectionBody = (props) => {
  return <div className="section__body">{props.children}</div>;
};

export default Section;
