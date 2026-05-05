export function List({ users, setUsers, friends, setFriends, setFilter }) {
  return (
    <>
    {users.length > 0 && 
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
              <button
                className="bg-emerald-500 text-white px-4 py-0.5 text-sm rounded hover:bg-emerald-600"
                onClick={function () {
                  setFriends([
                    ...friends,
                    {
                      name: `${user.firstName} ${user.lastName}`,
                      accountNo: user._id,
                    },
                  ]);
                  setUsers([])
                }}
              >
                Add
              </button>
            </div>
          );
        })}
      </div>
    
    }
    </>
  );
}
