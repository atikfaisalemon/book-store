import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./Register";
import Login from "./Login";
import DashBoard from "./DashBoard";
import About from "./About";
import WishList from "./WishList";
import CreateBook from "./CreateBook";
import NavBar from "./NavBar";
import { BookDetails } from "./BookDetails";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        <Route element={<NavBar />}>
          <Route path="wishlist" element={<WishList />} />
          <Route index element={<DashBoard />} />
          <Route path="/create" element={<CreateBook />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/book/:id" element={<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Index;
