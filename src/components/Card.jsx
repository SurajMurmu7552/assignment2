import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ item }) {
  const navigate = useNavigate();
  function handleCard() {
    navigate(`/${item.id}`);
  }
  return (
    <div className="card">
      <div className="card-container" onClick={handleCard}>
        <div className="card-img">
          <img src={item.Image} alt="" />
        </div>
        <div className="card-name">{item.name}</div>
      </div>
    </div>
  );
}
