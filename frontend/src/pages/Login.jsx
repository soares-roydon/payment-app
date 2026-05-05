import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onClickHandler() {
    navigate("/signup");
  }

  function login() {
    fetch("http://localhost:3000/api/v1/user/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(async function (response) {
      const result = await response.json();
      if (!response.ok) {
        alert(result.message);
      } else {
        localStorage.setItem("token", result.token)
        alert("Logged in successfully");
        navigate("/dashboard");
      }
    });
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-100">
          <Card>
            <div className="p-10">
              <div className="text-center py-6 text-2xl font-semibold">
                Welcome
              </div>
              <Input
                text={"Email"}
                placeholder={"lalo@email.com"}
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
              <Button text={"Login"} onClick={login} />
              <div className="flex gap-2 justify-center text-sm mt-5">
                <div className="">Create a new account?</div>
                <div
                  onClick={onClickHandler}
                  className="text-blue-700 underline cursor-pointer"
                >
                  sign up
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
