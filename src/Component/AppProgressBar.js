import React from "react";
import "./AppProgressBar.scss";

const AppProgressBar = (props) => {
  const { completed } = props;

  const fillerStyles = {
    width: `${completed}%`,
  };

  return (
    <div className="progressbar-container-styles">
      <div style={fillerStyles} className="progressbar-filler-styles">
        {/* <span className="progressbar-label-styles">{`${completed}%`}</span> */}
      </div>
    </div>
  );
};

export default AppProgressBar;
