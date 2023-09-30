import Planets from "./components/Planets/Planets.jsx";
import { AddPlanet } from "./components/AddPlanet/AddPlanet.jsx";
import { PersonInfo } from "./components/PersonInfo/PersonInfo.jsx";

function App() {
  const welcomingMessage = "We are going to learn react!";

  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 28,
  };

  const movies = [
    "Before the rain",
    "John Wick",
    "Shawshank Redemtion",
    "Harry Potter",
    "Spider-Man",
    "Avengers",
    "John Wick",
  ];

  const moviesContainerStyles = {
    display: "flex",
    justifyContent: "space-around",
    border: "1px solid grey",
    listStyleType: "none",
  };

  const printText = (text) => {
    return text;
  };

  return (
    <>
      <h1 style={{ color: "magenta" }}>Our title</h1>
      <h3>Hello from react app!</h3>
      <p style={{ fontSize: "30px", color: "white", backgroundColor: "grey" }}>
        {welcomingMessage}
      </p>

      <hr />
      <p style={{ color: "pink" }}>
        My name is: {person.firstName} {person.lastName}, and I am {person.age}
        years old.
      </p>
      <hr />

      {/* <ul>
        Top movies list for today:
        <li>{movies[0]}</li>
        <li>{movies[1]}</li>
        <li>{movies[2]}</li>
      </ul> */}

      <ul style={moviesContainerStyles}>
        Top movies list for today:
        {/*
         The key's value must be UNIQUE!
         It is not the most efficent way to use index as key's value 
        */}
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>

      <hr />

      <div>
        <h3>Today date is: {new Date().toDateString()} </h3>
        <p>{printText("JSX is fun")}</p>
        <p>{printText("JSX")} is important concept of react! </p>
      </div>

      <hr />
      <h2>Components:</h2>
      <Planets />
      <hr />
      <AddPlanet />
      <hr />
      <PersonInfo
        fullName="Bob Bobski"
        isAdult={true}
        favouriteFood="Burger"
        hobbies={["Play Football", "Watch football", "Learn React"]}
        moviesList={movies}
      />
    </>
  );
}

export default App;
