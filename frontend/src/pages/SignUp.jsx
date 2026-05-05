import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";

export function SignUp() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="w-100">
          <Card>
            <div className="text-center py-6 text-2xl font-semibold">
              Welcome
            </div>
            <Input text={"First Name"} placeholder={"Roydon"} />
            <Input text={"Last Name"} placeholder={"Soares"} />
            <Input text={"Email"} placeholder={"roy@gmail.com"} />
            <Input text={"Password"} placeholder={"******"} />
            <Button text={"Sign up"} accent={"primary"} />
          </Card>
        </div>
      </div>
    </>
  );
}
