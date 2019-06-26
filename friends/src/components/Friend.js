import React from "react";

export default function Friend({ name, age, email }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h4>Email: {email}</h4>
    </>
  );
}
