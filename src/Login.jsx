import { useState } from "react";
import InputField from "./InputField";
import { stringify } from "postcss";
import DashBoard from "./DashBoard";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();

  const handleSubmit = async () => {
    console.log({ email, password });
    const response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setResponse(data);

    localStorage.setItem("token", data.token);

    console.log("response", data);
  };

  //   const handleSubmit = () => {
  //     console.log({ email, password });
  //   };

  return (
    <div className=" flex flex-col gap-6 items-center">
      {response && response?.message}
      <InputField
        placeholder="Email"
        inputText={email}
        setText={setEmail}
        types="text"
      />
      <InputField
        placeholder="Password"
        inputText={password}
        setText={setPassword}
      />

      <button
        onClick={handleSubmit}
        type=""
        className="bg-green-400 w-20 p-1 rounded-full"
      >
        Submit
      </button>
      <DashBoard />
    </div>
  );
}

export default Login;
