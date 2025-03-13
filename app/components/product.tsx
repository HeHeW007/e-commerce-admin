"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { productData } from "../data/productData"; 
import { Pencil, Trash2 } from "lucide-react";
import Navbar from "./nav"; 
import Image from "next/image"; 


function Product() {
  const router = useRouter(); 
  const [products, setProducts] = useState(productData);
  const [deleteProductId, setDeleteProductId] = useState<number | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  // Open delete confirmation dialog
  const openDeleteDialog = (id: number) => {
    setDeleteProductId(id);
    setIsDeleteDialogOpen(true);
  };

  // Delete the product
  const handleDelete = () => {
    if (deleteProductId !== null) {
      setProducts(products.filter((product) => product.id !== deleteProductId));
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <div className="product-container">
      <Navbar />
      <h1 className="product-title">Product Management</h1>

      {/* Product Grid */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/*<img src={product.image} alt={product.name} className="product-image" />*/}
            {/* <img src={product.image} alt={product.name} className="product-image" /> */}
            <Image src={product.image} alt={product.name} width={200} height={200} className="product-image"
              priority={false} 
            />

            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            {/* Action Buttons */}
            <div className="product-actions">
              <button className="edit-btn" onClick={() => router.push(`/editProduct/${product.id}`)}>
                <Pencil className="icon" />
              </button>
              <button className="delete-btn" onClick={() => openDeleteDialog(product.id)}>
                <Trash2 className="icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Dialog */}
      {isDeleteDialogOpen && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h2>Are you sure?</h2>
            <p>Do you really want to delete this product? This action cannot be undone.</p>
            <div className="dialog-actions">
              <button className="cancel-btn" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</button>
              <button className="confirm-btn" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
