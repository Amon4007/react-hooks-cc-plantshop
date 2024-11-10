function PlantPage({ plants, onAddPlant, onUpdatePlant, setSearchTerm }) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearchChange={setSearchTerm} />
      <PlantList
        plants={plants}
        onUpdatePlant={onUpdatePlant}
      />
    </main>
  );
}