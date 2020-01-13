import React from "react";
import ring from "./ring.css";
const Ring = props => {
  return (
    <>
      <style>{ring}</style>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Ring;
