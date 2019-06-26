import React from "react";
import { Link } from "react-router-dom";
import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <ul className="w-1/2 mx-auto mb-8">
      {friends.map(friend => (
        <li key={friend.id}>
          <Link to={`/friends/${friend.id}`}>
            <Friend {...friend} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
