import React from "react";
import { planets } from "../../mockedData/planets";
import "./Planets.css";

const Planets = () => {
  // THE PROBLEM: NO PARENT COMPONENT!!!
  // return (
  //   <h1>This is planets component</h1>
  //   <h3>Planets in our solar system are:</h3>
  // );

  // SOLUTION 1:
  // return (
  //   <div>
  //     <h1>This is planets component</h1>
  //     <h3>Planets in our solar system are:</h3>
  //   </div>
  // );

  // SOLUTION 2:
  // return (
  //   <React.Fragment>
  //     <h1>This is planets component</h1>
  //     <h3>Planets in our solar system are:</h3>
  //   </React.Fragment>
  // );

  // SOLUTION 3:
  // <> </> is same as React.Frament

  const handleClickPlanetInfo = (planetName) => {
    console.log(`${planetName} was clicked.`);
  };

  const printPlanets = (planetsList) => {
    if (planetsList.length === 0) {
      return <h3 style={{ color: "red" }}>No planets found!</h3>;
    }

    /**
     * we are returing li generated for each item
     * of the planetsList array
     */
    return planetsList.map((planet) => (
      <li onClick={() => handleClickPlanetInfo(planet.name)} key={planet.id}>
        {planet.name}
      </li>
    ));
  };

  return (
    <>
      <h1>This is planets component</h1>
      <h3>Planets in our solar system are:</h3>

      {/* <ol>
        {planets.map((planet) => (
          <li key={planet.id}> {planet.name} </li>
        ))}
      </ol> */}
      {/* Same as above but shorter, cleaner */}
      {/* className === class */}
      <ol className="planetsContainer">{printPlanets(planets)}</ol>
    </>
  );
};

export default Planets;
