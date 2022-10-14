import React from "react";

const Helmet = (props) => {
  document.title = "STORE-" + props.title;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="container">{props.children}</div>;
};

export default Helmet;
