"use client";

function EditProduct() {
  return (
    <div className="editProductContainer">
      <div className="productcontent">
        <h2 className="headertext">Edit Product</h2>
        <form className="editform">
          <div className="formgroup">
            <label htmlFor="name" className="editprodname">
              Product Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              readOnly
              placeholder="Product Name"
              required
              className="ordername"
            />
          </div>
          <div className="formgroup">
            <label htmlFor="price" className="editprodprice">
              Product Price:
            </label>
            <input
              type="number"
              id="price"
              name="price" placeholder="Product Price"
              required
              className="orderprice"
            />
          </div>
          <button
            type="submit"
            className="ordersave"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
