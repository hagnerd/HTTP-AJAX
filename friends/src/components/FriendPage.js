import React from "react";
import Friend from "./Friend";

const btnStyles = "rounded py-3 px-2 bg-gray-400";

export default function FriendPage({ friend, history, handleDelete }) {
  const deleteFriend = () => {
    handleDelete(friend.id);
    history.push("/");
  };
  return (
    <React.Fragment>
      <Friend {...friend} />
      <div className="w-1/3 flex justify-around mx-auto">
        <button
          className={btnStyles}
          onClick={() => {
            history.push(`/friends/${friend.id}/edit`);
          }}
        >
          Edit
        </button>
        <button
          className={btnStyles + " hover:bg-red-300"}
          onClick={deleteFriend}
        >
          Delete
        </button>
      </div>
    </React.Fragment>
  );
}
