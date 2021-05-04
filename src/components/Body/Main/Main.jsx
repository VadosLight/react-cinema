import React from "react";
import "./Main.css";
import MovieCard from "./MovieCard/MovieCard";
import EmptyPage from "./EmptyPage/EmptyPage";
import store from "../../../store";
import { connect } from "react-redux";

class Main extends React.Component {
  emptyOrFill = () => {
    if (
      store.getState().movieList !== undefined &&
      store.getState().movieList.length > 0
    ) {
      return store
        .getState()
        .movieList.map((el, index) => (
          <MovieCard key={index} movie={el}></MovieCard>
        ));
    } else {
      return <EmptyPage></EmptyPage>;
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
