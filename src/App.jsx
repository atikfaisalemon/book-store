import "./App.css";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";

function App() {
  const [isLoginForm, setIsLoginForm] = useState(false);
  return (
    <div>
      {isLoginForm ? <Login /> : <Register goToLogin={setIsLoginForm} />}
    </div>
  );
}

export default App;
