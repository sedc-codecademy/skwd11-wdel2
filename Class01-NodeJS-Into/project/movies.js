const moviesLibrary = [
  { id: 1, title: "Harry Potter", genre: "Fantasy" },
  { id: 2, title: "Lord of the Rings", genre: "Fantasy" },
  { id: 3, title: "The Hobbit", genre: "Fantasy" },
  { id: 4, title: "Barbie", genre: "Fantasy/Drama" },
];

const printMovies = (arrayOfMovies) => {
  if (arrayOfMovies.length === 0) return;

  arrayOfMovies.forEach((movie) => {
    const movieInfo = `Movie name is: ${movie.title} with genre: ${movie.genre}`;
    console.log(movieInfo);
  });
};

// DEFAULT EXPORT MULTIPLE VALUES
export default {
  moviesLibrary,
  printMovies,
};

// SAME AS
// export default {
//   moviesLibrary: moviesLibrary,
//   printMovies: printMovies
// }
