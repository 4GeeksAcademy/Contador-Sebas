import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "../../styles/index.css";

const Contador = ({ contador1, contador }) => {
  const digits = [0, 0, 0, 0, contador1, contador];

  return (
    <div className="counter-container">
      <FontAwesomeIcon icon={faClock} className="clock-icon" />
      {digits.map((digit, index) => (
        <div key={index} className="counter-digit">
          {digit}
        </div>
      ))}
    </div>
  );
};


export default Contador;