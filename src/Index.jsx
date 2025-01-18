import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./Register";
import Login from "./Login";
import DashBoard from "./DashBoard";
import ProtectedRoute from "./ProtectedRoute";
import About from "./About";
import WishList from "./WishList";
import CreateBook from "./CreateBook";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashBoard/wishlist" element={<WishList />} />
        <Route path="/create" element={<CreateBook />} />

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
