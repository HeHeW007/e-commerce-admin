"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 15

function Navbar() {
  const router = useRouter(); // Next.js 15 uses useRouter()
  const [showAlert, setShowAlert] = useState(false);

//   function handleNavigation(path: string) {
//     router.push(path);
//   }

  function handleLogout() {
    setShowAlert(true);

    // Redirect after 2 seconds
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }

  return (
    <>
      {/* Logout Alert */}
      {showAlert && (
        <div className="logout-alert">
          ✅ Logout successful!
          <br /> Thank you for your visit.
        </div>
      )}

      {/* Navbar */}
      <div className="nav-container">
        <h2>
          NEXA<span>CART</span>
        </h2>
        <div className="nav-content">
            <a  onClick={() => router.push('/dashboard')}>Dashboard</a>
            <a onClick={() => router.push('/product')}>Products</a>
            <a  onClick={() => router.push('/order')}>Orders</a>
            </div>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Navbar;
