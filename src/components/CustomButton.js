import React from "react";

export default function CustomButton({
  className = "",
  onClick = () => {},
  label,
  disabled = false,
  type = "button",
  style = {}, // Optional style prop
}) {
  return (
    <button
      type={type}
      className={`${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style} // Apply the style prop
    >
      {label}
    </button>
  );
}
