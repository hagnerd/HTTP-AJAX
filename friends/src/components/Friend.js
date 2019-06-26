import React from "react";

export default function Friend({ name, age, email }) {
  return (
    <li>
      <h2>{name}</h2> {age} - {email}
    </li>
  );
}
