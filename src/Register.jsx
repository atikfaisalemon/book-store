import { useState } from "react";

import InputField from "./InputField";
import LoginButton from "./LoginButton";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log({ userName, email, password });
    const response = await fetch(
      "http://localhost:3000/api/user/registration",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: userName, email, password }),
      }
    );

    const data = await response.json();

    console.log("response", data);
  };

  return (
    <div>
      <div className="flex flex-col justify-end items-end mt-10 mr-11">
        <LoginButton />
      </div>

      <div className=" flex flex-col gap-6 items-center">
        <InputField
          placeholder="User Name"
          inputText={userName}
          setText={setUserName}
          types="text"
        />
        <InputField
          placeholder="Email"
          inputText={email}
          setText={setEmail}
          types="email"
        />
        <InputField
          placeholder="Password"
          inputText={password}
          setText={setPassword}
          types="password"
        />
        <button
          onClick={handleSubmit}
          type=""
          className="bg-green-400 w-20 p-1 rounded-full"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
