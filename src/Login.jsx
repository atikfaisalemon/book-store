import { useState } from "react";
import { useNavigate } from "react-router";
import InputField from "./InputField";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();

  const navigate = useNavigate();

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
    if (data.token) {
      localStorage.setItem("token", data.token);
      console.log("response", data);
      navigate("/");
    }
  };

  //   const handleSubmit = () => {
  //     console.log({ email, password });
  //   };

  return (
    <div className=" flex flex-col gap-6 items-center mt-16">
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
    </div>
  );
}

export default Login;
