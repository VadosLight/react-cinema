import React from "react";
import "./Main.css";
import MovieCard from "./MovieCard/MovieCard";
import store from "../../../store";
import { connect } from "react-redux";

class Main extends React.Component {
  emptyOrFill = () => {
    if (store.getState().movieList !== undefined) {
      // console.log("Фильм есть", store.getState().movieList);
      return store
        .getState()
        .movieList.map((el, index) => (
          <MovieCard key={index} movie={el}></MovieCard>
        ));
    } else {
      // console.log("Кина нет", store.getState().movieList);
      return <p>Кина нет</p>;
    }
  };

  render() {
    return <div className="main">{this.emptyOrFill()}</div>;
  }
}

const mapStateToProps = function (state) {
  return {
    movieList: state,
  };
};

export default connect(mapStateToProps)(Main);
