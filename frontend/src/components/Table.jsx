import { useState } from "react";
import { Button } from "./Button";

export function Table({friends}) {
  const [amount, setAmount] = useState()

  function transfer(to, name) {
    fetch("https://payment-app-6j79.onrender.com/api/v1/account/transfer", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        amount: Number(amount),
        to
      })
    })
    alert(`\$${amount} sent to ${name}`)
    setAmount(0)
  }

  return (
    <>
    {friends.length > 0 &&  
      <div className="mx-4">
        <table className="w-full md:w-1/2">
          <thead>
            <tr className="bg-green-300">
              <th className="px-1 py-0.5 text-left">Name</th>
              <th className="px-1 py-0.5 text-left">Account No.</th>
              <th className="px-1 py-0.5 text-left">Amount</th>
              <th className="px-1 py-0.5 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {friends.map(function (friend) {
              return (
                <tr key={friend.accountNo} className="border-b border-gray-400 bg-green-50 text-sm">
                  <td className="px-1 py-0.5">
                    {friend.name}
                  </td>
                  <td className="px-1 py-0.5">{friend.accountNo}</td>
                  <td><input type="number" onChange={(e) => {setAmount(e.target.value)}} value={amount} className="border border-gray-400 outline-violet-300 rounded px-2 py-1"/></td>
                  <td className="px-1 py-0.5 w-24">
                    <Button text={"Transfer"} accent={"primary"} onClick={() => transfer(friend.accountNo, friend.name)}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    }
    </>
  );
}
