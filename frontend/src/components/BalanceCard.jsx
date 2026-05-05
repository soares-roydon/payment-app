import { useEffect, useState } from "react";
import { Card } from "../components/Card";

export function BalanceCard() {
  const [amount, setAmount] =useState(999)
  let accountNo = "000123456789"

  useEffect(function () {
    fetch("http://localhost:3000/api/v1/account/balance", {
      method: "GET",
      headers: {
        "authorization": localStorage.getItem("token")
      },
    }).then(async function (response) {
        const result = await response.json()
        setAmount(result.balance)
    })
  }, [])

  return (
    <>
      <div>
          <Card>
            <div className="flex justify-between items-center bg-green-500 text-white font-bold px-4 py-2">
            <div className="text-lg">Account</div>
            <div className="text-sm">{accountNo}</div>
            </div>
            <div className="bg-green-50 px-4 pt-2 text-blue-950">Balance</div>
            <div className="bg-green-50 px-4 py-2 text-blue-950 font-medium text-2xl">${amount}</div>
          </Card>
        </div>
    </>
  );
}