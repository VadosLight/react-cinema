import React from "react";
import "./Main.css";
import MovieCard from "./MovieCard/MovieCard";
import store from "../../../store";

class Main extends React.Component {
  emptyOrFill() {
    // this.setState({ movieList: store.getState().movieList });

    if (store.getState().movieList.length >= 1) {
      console.log("Фильм есть", store.getState().movieList);
      return store
        .getState()
        .movieList.map((el, index) => (
          <MovieCard key={index} movie={el}></MovieCard>
        ));
    } else {
      console.log("Кина нет", store.getState().movieList);
      return <p>Кина нет</p>;
    }
  }

  render() {
    return <div className="main">{this.emptyOrFill()}</div>;
  }
}

export default Main;
