import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, searchedPlant }) {
  useEffect(() => {
    // Add any necessary effect logic here, if applicable
  }, [plants]);

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchedPlant.toLowerCase())
  );

  return (
    <ul className="plant-list">
      {filteredPlants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </ul>
  );
}

export default PlantList;
