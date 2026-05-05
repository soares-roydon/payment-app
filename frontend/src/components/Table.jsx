import { Button } from "./Button";

export function Table() {
  const users = [
    {
      firstName: "Light",
      lastName: "Yagami",
      id: "000000012345",
    },
    {
      firstName: "Light",
      lastName: "Yagami",
      id: "000000012334",
    },
    {
      firstName: "Light",
      lastName: "Yagami",
      id: "0000002312421",
    },
    {
      firstName: "Light",
      lastName: "Yagami",
      id: "000002125215",
    },
  ];

  return (
    <>
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
            {users.map(function (user) {
              return (
                <tr key={user.id} className="border-b border-gray-400 bg-green-50 text-sm">
                  <td className="px-1 py-0.5">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-1 py-0.5">{user.id}</td>
                  <td className="px-1 py-0.5 w-24">
                    <Button text={"Transfer"} accent={"primary"}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
