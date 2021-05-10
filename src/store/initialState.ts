import { TState } from "types/storeTypes";

const state: TState = {
  movieMore: {
    Title: "The Hitchhiker's Guide to the Galaxy",
    Year: "2005",
    Rated: "PG",
    Released: "29 Apr 2005",
    Runtime: "109 min",
    Genre: "Adventure, Comedy, Sci-Fi",
    Director: "Garth Jennings",
    Writer:
      "Douglas Adams (book), Douglas Adams (screenplay), Karey Kirkpatrick (screenplay)",
    Actors: "Bill Bailey, Anna Chancellor, Warwick Davis, Yasiin Bey",
    Plot:
      'Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of "The Hitchhiker\'s Guide to the Galaxy."',
    Language: "English",
    Country: "UK, USA",
    Awards: "1 win & 10 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU5MGU4MjctNjA2OC00N2FhLWFhNWQtMzQyMGI2ZmQ0Y2YyL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    Ratings: [
      { Source: "Internet Movie Database", Value: "6.8/10" },
      { Source: "Rotten Tomatoes", Value: "60%" },
      { Source: "Metacritic", Value: "63/100" },
    ],
    Metascore: "63",
    imdbRating: "6.8",
    imdbVotes: "187,925",
    imdbID: "tt0371724",
    Type: "movie",
    DVD: "25 Oct 2013",
    BoxOffice: "$51,085,416",
    Production: "Spyglass Entertainment",
    Website: "N/A",
    Response: "True",
  },
  movieList: [],
  sortBy: "name A-Z",
  pageNumber: 1,
  title: "",
};

export default state;
