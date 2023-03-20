import React from "react";

export default function Restaurant({ name, address }) {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <div className="card-body">
          <h4 className="card-title">Name: {name}</h4>
          <h6 className="card-text">Address: {address}</h6>
          <a href="e" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
