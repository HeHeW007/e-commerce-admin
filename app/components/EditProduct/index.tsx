"use client";

const EditProduct = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Product</h2>
        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Product Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              readOnly
              placeholder="Product Name"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price" className="block text-gray-700 font-medium">
              Product Price:
            </label>
            <input
              type="number"
              id="price"
              name="price" placeholder="Product Price"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
