import React from "react";

export default function Friend({ name, age, email }) {
  return (
    <div className="flex flex-col items-center bg-white m-3 p-5 rounded">
      <h2 className="text-2xl text-gray-700">
        <span className="font-bold">Name:</span> {name}
      </h2>
      <h3 className="text-lg">
        <span className="font-bold">Age:</span> {age}
      </h3>
      <h4>
        <span className="font-bold">Email:</span> {email}
      </h4>
    </div>
  );
}
