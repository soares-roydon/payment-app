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
  const [balance, setBalance] = useState(999);

  const navigate = useNavigate();

  useEffect(function () {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, []);

  function search(value) {
    fetch(
      `https://payment-app-6j79.onrender.com/api/v1/user/bulk?filter=${value}`,
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      },
    ).then(async function (response) {
      const result = await response.json();
      setUsers(result.user);
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 mx-4 mt-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <BalanceCard balance={balance} setBalance={setBalance}/>
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
      <div className="grid grid-cols-1">
        <Table friends={friends} setBalance={setBalance}/>
      </div>
    </>
  );
}
