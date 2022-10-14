import { ReactNode } from "react";

const Grid = (props) => {
  const style = {
    gap: `${props.gap}px` || "0",
  };

  const col = `grid-col-${props.col}` || "";
  const mdCol = `grid-col-md-${props.mdCol}` || "";
  const smCol = `grid-col-sm-${props.smCol}` || "";

  return (
    <div className={`grid ${col} ${mdCol} ${smCol}`} style={style}>
      {props.children}
    </div>
  );
};

export default Grid;
