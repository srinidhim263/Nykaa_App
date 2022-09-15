import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Signup from "./Pages/Signup";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import HistoryPage from "./Pages/HistoryPage";
import AdminPage from "./Pages/AdminPage";
import AddProductComponent from "./Components/products/AddProductComponent";
import CategoryComponent from "./Components/category/CategoryComponent";
import CategoryPage from "./Pages/CategoryPage";
import ProtectedRoutes from "./Components/utils/ProtectedRoutes";
import HairCarePage from "./Pages/HairCarePage";
import MakeUpPage from "./Pages/MakeUpPage";

const App= ()=> {
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" exact element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route element={<ProtectedRoutes auth={loggedInUser.isLoggedIn} />}>
      <Route path="/cart" element={<CartPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/addproduct" element={<AddProductComponent />} />
      <Route path="/addcategory" element={<CategoryComponent />} />
      <Route path="/haircare" element={<HairCarePage />} />
      <Route path="/makeup" element={<MakeUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
