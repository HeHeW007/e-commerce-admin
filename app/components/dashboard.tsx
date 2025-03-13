"use client";

import React from "react";
import dashboardData from "../data/dashboardData"; // Ensure correct import path
import Navbar from "./nav"; // Ensure correct import path


function Dashboard() {
  if (!dashboardData) return <p>Loading...</p>; // Handle missing data

  return (
    <div className="dashboard-container">
      <Navbar />

      {/* Stats Cards */}
      <div className="stats-container">
        {dashboardData.stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2>{stat.label}</h2>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Tables Section */}
      <div className="tables-container">
        {/* Latest Products Table */}
        <div className="table-box">
          <h3>Latest Products</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.latestProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Latest Orders Table */}
        <div className="table-box">
          <h3>Latest Orders</h3>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.latestOrders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.amount}</td>
                  <td>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
