"use client";

const EditOrder = () => {
  return (
    <div className="edit-order-container">
      <div className="edit-order-content">
        <h2 className="text-2xl font-semibold text-center mb-4">Edit Order</h2>
        <form className="edit-order-form">
          <div className="form-group">
            <label htmlFor="customer" className="order-label">
              Customer Name:
            </label>
            <input
              type="text"
              id="customer"
              name="customer"
              placeholder="Customer Name"
              required
              className="order-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="total" className="edit-order-label">
              Order Total:
            </label>
            <input
              type="number"
              id="total"
              name="total"
              placeholder="Total Amount"
              required
              className="order-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="status" className="edit-order-label">
              Order Status:
            </label>
            <select id="status" name="status" required className="order-input">
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <button type="submit" className="save-order">
            Save Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditOrder;
