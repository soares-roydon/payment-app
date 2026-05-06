import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { useEffect, useState } from "react";

export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function signup() {
    fetch("https://payment-app-6j79.onrender.com/api/v1/user/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })
      .then(async function (response) {
        const result = await response.json()
        if(!response.ok) {
          alert(result.message)
        }
        else {
          alert("Signed up successfully")
          navigate("/login")
        }
      })
  }

  function onClickHandler() {
    navigate("/login");
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-100">
          <Card>
            <div className="p-5">
              <div className="text-center py-6 text-2xl font-semibold">
                Welcome
              </div>
              <Input
                text={"First Name"}
                placeholder={"Walter"}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <Input
                text={"Last Name"}
                placeholder={"White"}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
              <Input
                text={"Email"}
                placeholder={"walter@heisenberg.com"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                text={"Password"}
                placeholder={"******"}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                text={"Sign up"}
                accent={"primary"}
                onClick={signup}
              />
              <div className="flex gap-2 justify-center text-sm mt-5">
                <div className="">Already have an account?</div>
                <div
                  onClick={onClickHandler}
                  className="text-blue-700 underline cursor-pointer"
                >
                  sign in
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
