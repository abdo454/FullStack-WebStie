import { useState } from "react";

function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setDuration] = useState(0);
  const [type, setType] = useState("");
  const [brand, setNote] = useState("");

  const searchButtonPressed = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <h2>Search For an Item</h2>
      </div>
      <div className="row">
        <div className="col">
          <label htmlFor="name-field">Name:</label>
          <input
            id="name-field"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="price-field">Max Duration:</label>
          <input
            id="price-field"
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="type-field">Type:</label>
          <input
            id="type-field"
            type="text"
            className="form-control"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div className="col">
          <label htmlFor="brand-field">Note:</label>
          <input
            id="brand-field"
            type="text"
            className="form-control"
            value={brand}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          className="col-4 btn btn-primary"
          onClick={searchButtonPressed}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
