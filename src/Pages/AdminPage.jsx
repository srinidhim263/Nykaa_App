import React from 'react'
import AddCategoryComponent from '../Components/category/AddCategoryComponent';
import AddUserComponent from '../Components/AddUserComponent';
import AppBar from '../Components/AppBar';
import Footer from '../Components/FooterComp';
import ProductAdmin from '../Components/products/ProductAdmin';

const AdminPage = () => {
  return (
    <>
    <AppBar/>
    <ProductAdmin/>
    <AddCategoryComponent/>
    {/* <AddUserComponent/> */}
    <Footer/>
    </>
  );
};

export default AdminPage;