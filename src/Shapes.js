import React, { useState } from "react";

import "./Shapes.css";

function Triangle({ color, onClick }) {
  const [nameVisibility, setNameVisibility] = useState(false);

  return (
    <div
      onMouseEnter={() => setNameVisibility(true)}
      onMouseLeave={() => setNameVisibility(false)}
    >
      <div
        className="triangle"
        style={{ borderColor: `transparent transparent ${color} transparent` }}
        onKeyPress={onClick}
        tabIndex={0}
      ></div>
      {nameVisibility && <p class="shape-name-triangle">Triangle</p>}
    </div>
  );
}

function Square({ color, onClick }) {
  const [nameVisibility, setNameVisibility] = useState(false);
  return (
    <div
      className="square"
      onKeyPress={onClick}
      tabIndex={0}
      style={{ backgroundColor: color }}
      onMouseEnter={() => setNameVisibility(true)}
      onMouseLeave={() => setNameVisibility(false)}
    >
      {nameVisibility && <p class="shape-name">Square</p>}
    </div>
  );
}

function Circle({ color, onClick }) {
  const [nameVisibility, setNameVisibility] = useState(false);

  return (
    <div
      className="circle"
      style={{ backgroundColor: color }}
      onMouseEnter={() => setNameVisibility(true)}
      onMouseLeave={() => setNameVisibility(false)}
      onKeyPress={onClick}
      tabIndex={0}
    >
      {nameVisibility && <p class="shape-name">Circle</p>}
    </div>
  );
}

function Hexagon({ color, onClick }) {
  const [nameVisibility, setNameVisibility] = useState(false);

  return (
    <div
      onMouseEnter={() => setNameVisibility(true)}
      onMouseLeave={() => setNameVisibility(false)}
      onKeyPress={onClick}
      tabIndex={0}
    >
      <div className="hexagon" style={{ color: color }}>
        &#x2B22;
      </div>
      {nameVisibility && <p class="shape-name-hexagon">Hexagon</p>}
    </div>
  );
}

export { Triangle, Square, Circle, Hexagon };
