import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <CartContainer></CartContainer>
      </div>
    </>
  );
}

export default App;
