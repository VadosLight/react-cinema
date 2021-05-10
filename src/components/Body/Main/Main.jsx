import React from "react";
import { connect } from "react-redux";
import store, { sagaMiddleware } from "store";
import { fetchMoreMovies } from "store/sagas";

import MovieCard from "./MovieCard/MovieCard";
import EmptyPage from "./EmptyPage/EmptyPage";
import "./Main.css";

class Main extends React.Component {
  emptyOrFill = () => {
    if (
      store.getState().movieList !== undefined &&
      store.getState().movieList.length > 0
    ) {
      return (
        <>
          <div className="main__cards">
            {store.getState().movieList.map((el, index) => (
              <MovieCard key={index} movie={el} movieId={el.imdbID} />
            ))}
          </div>
          <button
            className="btn-load-more"
            onClick={() => sagaMiddleware.run(fetchMoreMovies)}
          >
            Load more...
          </button>
        </>
      );
    } else {
      return <EmptyPage />;
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
