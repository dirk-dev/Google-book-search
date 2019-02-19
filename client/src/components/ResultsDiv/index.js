import React from "react";

function ResultsDiv({ children }) {
  return (
    <div
      style={{
        height: 700,
        clear: "both",
        padding: 20,
        textAlign: "center",
        backgroundColor: "silver"
      }}
      className="ResultsDiv"
    >
      {children}
    </div>
  );
}

export default ResultsDiv;
