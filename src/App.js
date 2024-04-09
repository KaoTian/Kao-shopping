import React from "react";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import firebase from "./untils/firebase";
import 'bootstrap/dist/css/bootstrap.min.css';

import 'semantic-ui-css/semantic.min.css';
import './App.css';


import Header from "./main/Header";
import Home from "./main/Home";
import Footer from "./main/Footer";
import Login from "./main/Login";
import Member from "./main/Member";
import Allproducts from "./page/Allproducts";
import Products_detail from "./page/Proucts_detail";
import Cart from "./main/Cart";

function App() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    })
  }, []);
  
  return (
      <BrowserRouter>
        <Header user={user}/>
        <br />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="Login" element={<Login />}></Route>
            <Route path="Products" element={<Allproducts />}></Route>
            <Route path="Cart" element={user ? <Cart /> : <Login />}></Route>
            <Route path="Products/:productsId" element={<Products_detail />}></Route>
            <Route path="Member/*" element={user ? <Member /> : <Login />}></Route>
            <Route></Route>
          </Routes>
          <br />
          <Footer />
      </BrowserRouter>
  );
}

export default App;
