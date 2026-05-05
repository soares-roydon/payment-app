import { Button } from "./Button";

export function Table({friends}) {

  return (
    <>
    {friends.length > 0 &&  
      <div className="mx-4">
        <table className="w-full">
          <thead>
            <tr className="bg-green-300">
              <th className="px-1 py-0.5 text-left">Name</th>
              <th className="px-1 py-0.5 text-left">Account No.</th>
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
                  <td className="px-1 py-0.5 w-24">
                    <Button text={"Transfer"} accent={"primary"}/>
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
