// components/PlantList.js
import React from "react";
import PlantCard from "./PlantCard";


function PlantList({ plants, searchTerm }) {
  // Filter plants based on search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredPlants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}

export default PlantList;
