// App.js
import React, { useEffect, useState } from "react";
import PlantList from "./PlantList";
import AddPlantForm from "./AddPlantForm";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from the backend on mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Add new plant to the backend and update the state
  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((data) => setPlants((prevPlants) => [...prevPlants, data]));
  };

  return (
    <div className="App">
      <h1>Plantsy Admin</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={plants} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
