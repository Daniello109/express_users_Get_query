const database = require("./database");
const users = require("./database");

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    colors: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    colors: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

/* const getMovies = (req, res) => {
  database
  .query("select * from movies")
  .then(([movies]) => {
  res.json(movies);

})
.catch((err) => {
  console.error(err);
  res.status(500).send("Error retrieving data from database");
});
};
 */


const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  const user = users.find((user) => user.id === id);

  if (user != null) {
    res.json(user);
  } else {
    res.status(404).send("Not Found");
  }
};

module.exports = {
  getMovies,
  getMovieById,
};
