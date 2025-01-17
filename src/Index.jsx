import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./Register";
import Login from "./Login";
import DashBoard from "./DashBoard";
import ProtectedRoute from "./ProtectedRoute";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashBoard"
          element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Index;
