import { useNavigate } from "react-router";

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/login");
      }}
      type=""
      className="bg-rose-400 w-20 p-1 rounded-full"
    >
      Login
    </button>
  );
};

export default LoginButton;
