import React from "react";

export default function MessageEmpty() {
  return (
    <div>
      <div
        style={{
          padding: "0 0 0 10px",
          height: "450px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#fff" }}>No Message</p>
      </div>
    </div>
  );
}
