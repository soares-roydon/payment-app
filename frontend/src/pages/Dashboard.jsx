import { useEffect, useState } from "react";
import { BalanceCard } from "../components/BalanceCard";
import { Search } from "../components/Search";
import { Table } from "../components/Table";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { List } from "../components/List";

export function Dashboard() {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  const navigate = useNavigate();

  useEffect(function () {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  function search(value) {
    fetch(`http://localhost:3000/api/v1/user/bulk?filter=${value}`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    }).then(
      async function (response) {
        const result = await response.json();
        setUsers(result.user);
      },
    );
  }

  return (
    <>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        className="bg-red-400 px-2 py-1 rounded text-white text-sm hover:bg-red-500"
      >
        Log out
      </button>
      <div className="grid grid-cols-1 mx-4 mt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <BalanceCard />
      </div>
      <div className="mx-4 my-6 lg:grid grid-cols-2">
        <div className="flex flex-col">
          <Search
            onChange={(e) => {
              search(e.target.value);
              setFilter(e.target.value);
            }}
            value={filter}
          />
          {filter.trim() !== "" && (
            <List
              users={users}
              setUsers={setUsers}
              friends={friends}
              setFriends={setFriends}
              setFilter={setFilter}
            />
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 mb-5 md:grid-cols-2 lg:grid-cols-2">
        <Table friends={friends} />
      </div>
    </>
  );
}
