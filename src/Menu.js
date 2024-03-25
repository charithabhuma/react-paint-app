import React from "react";
import "./App.css";

const Menu = ({ setLineColor, setLineWidth, setLineOpacity, clearCanvas }) => {
  return (
    <div className="Menu">
      <div className="MenuItems">
        <div classname='MenuItem'>
        <label>Brush Color </label>
        <input
          type="color"
          onChange={(e) => {
            setLineColor(e.target.value);
          }}
        /></div>
         <div classname='MenuItem'>
        <label>Brush Width </label>
        <input
          type="range"
          min="3"
          max="20"
          onChange={(e) => {
            setLineWidth(e.target.value);
          }}
        /></div>
         <div classname='MenuItem'>
        <label>Brush Opacity</label>
        <input
          type="range"
          min="1"
          max="100"
          onChange={(e) => {
            setLineOpacity(e.target.value / 100);
          }}
        /></div>
        <button onClick={clearCanvas}>Clear</button>
      </div>
    </div>
  );
};

export default Menu;
