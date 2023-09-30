export const AddPlanet = () => {
  const handleChangePlanetName = (event) => {
    console.log(event);
    console.log(event.target.value);
    //Here we may have more logic, change state etc.
  };
  const onPlanetSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // logic for adding new planet
    console.log("New plannet added");
  };
  return (
    <>
      <h1>Add planet</h1>

      <form>
        {/* htmlFor === for */}
        <label htmlFor="planetName">Planet Name</label>
        <input
          type="text"
          id="planetName"
          placeholder="Enter Planet Name"
          // onKeyUp={(event) => handleChangePlanetName(event)}
          // onKeyDown={(event) => handleChangePlanetName(event)}
          // onChange={(event) => handleChangePlanetName(event)}
          // onChange={handleChangePlanetName}
          onChange={(e) => {
            handleChangePlanetName(e);
            // Call different method/function
            // do more staff etc.
          }}
        />

        <button
          // type="button"
          // onClick={() => onPlanetSubmit()}
          onClick={onPlanetSubmit}
        >
          Add Planet
        </button>
      </form>
    </>
  );
};
