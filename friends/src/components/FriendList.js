import React from "react";
import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friend {...friend} />
        </li>
      ))}
    </ul>
  );
}
