import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setDuration] = useState(0);
  const [type, setType] = useState("");
  const [brand, setNote] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
    setName("");
    setDuration(0);
    setType("");
    setNote("");
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Add a Item</h2>
      </div>
      <div className="row">
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price-field">Duration:</label>
        <input
          id="price-field"
          type="number"
          className="form-control"
          value={price}
          onChange={(e) => setDuration(e.target.value)}
        />
        <label htmlFor="type-field">Type:</label>
        <input
          id="type-field"
          type="text"
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <label htmlFor="brand-field">Note:</label>
        <input
          id="brand-field"
          type="text"
          className="form-control"
          value={brand}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="row mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={addItemButtonPressed}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
