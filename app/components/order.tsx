"use client";

import React from 'react'
import Navbar from './nav'
import Layout from "../layout";
import { useState } from "react";
import { useRouter } from 'next/navigation';

function Order() 
{

   const router = useRouter();

    const [orders, setOrders] = useState([
   { id: 1, customer: "John Doe", total: "$150.00", status: "Pending" },
   { id: 2, customer: "Jane Smith", total: "$200.00", status: "Completed" },
   ]);

   const handleDelete = (id: number) => {
   if (confirm("Are you sure you want to delete this order?")) {
     setOrders(orders.filter((order) => order.id !== id));
   }
  }
  return (
    <>
      <Layout>    
        <Navbar/>
     <div className="order-container">
        <h2 className="text-2xl font-semibold text-center mb-4">Orders</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Customer</th>
              <th className="border border-gray-300 p-2">Total</th>
              <th className="border border-gray-300 p-2">Status</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="border border-gray-300 p-2">{order.customer}</td>
                <td className="border border-gray-300 p-2">{order.total}</td>
                <td className="border border-gray-300 p-2">{order.status}</td>
                <td className="border border-gray-300 p-2">
                  <button className="order-btn-edit" >
                    Edit
                  </button>
                  <button
                    className="order-btn-delete"
                    onClick={() => handleDelete(order.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="add-order" onClick={()=> router.push(`/editOrder`)}>
          Add Order
        </button>
    </div>
    </Layout>

    </>
  );
  }

export default Order;