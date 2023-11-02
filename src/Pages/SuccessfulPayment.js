import React from "react";
import gifImage from "./pyment.gif"; 

const SuccessfulPayment = () => {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#f0f0f0", overflow: "hidden" }}>
      <h1 style={{ marginTop: 20, color: "black" }}>Payment Successful!</h1>
      <img src={gifImage} alt="GIF" style={{ width: "100%", maxWidth: 400, marginTop: 20, marginBottom: 20 }} />
      {/* Add any additional content or animation elements */}
    </div>
  );
};

export default SuccessfulPayment;
