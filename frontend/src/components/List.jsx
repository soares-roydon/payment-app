import { useState } from "react";

export function List({ users, setUsers, friends, setFriends, setFilter }) {
  let isAdded = false;
  return (
    <>
      {users.length > 0 && (
        <div>
          {users.map(function (user, index) {
            return (
              <div
                key={user._id}
                className="flex justify-between border-b border-x border-gray-300 px-2 py-1 text-sm text-gray-600 hover:bg-green-100"
              >
                <div>
                  {user.firstName} {user.lastName}
                </div>
                <div>{user._id}</div>
                {
                  (isAdded = friends.some(
                    (friend) => friend.accountNo === user._id,
                  ))
                }
                <button
                  className="bg-emerald-500 text-white px-4 py-0.5 text-sm rounded hover:bg-emerald-600"
                  onClick={function () {
                    if (isAdded) return;
                    setFriends([
                      ...friends,
                      {
                        name: `${user.firstName} ${user.lastName}`,
                        accountNo: user._id,
                      },
                    ]);
                    setUsers([]);
                    setFilter("");
                  }}
                >
                  {isAdded ? "Added" : "Add"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
