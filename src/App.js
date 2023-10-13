import "./App.css";
import { useState } from "react";
import SearchBar from "./Components/SearchBar";
import AddItem from "./Components/AddItem.js";
import ItemsDisplay from "./Components/ItemsDisplay";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
      <div className="row mt-3">
        <ItemsDisplay items={data["items"]} />
      </div>
    </div>
  );
}

export default App;
