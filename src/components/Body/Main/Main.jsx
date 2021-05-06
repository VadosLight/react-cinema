import React from "react";
import { connect } from "react-redux";
import store, { actions } from "store";
import { openConst, privateConst } from "constants/index";

import MovieCard from "./MovieCard/MovieCard";
import EmptyPage from "./EmptyPage/EmptyPage";
import "./Main.css";

class Main extends React.Component {
  fetchMore = () => {
    store.dispatch({ type: actions.INCREMENT_COUNT_PAGE });

    const TITLE = encodeURIComponent(
      document.getElementById("search-field__input").value
    );

    fetch(
      `${openConst.BASE_URL}?apikey=${privateConst.API_KEY}&s=${TITLE}&page=${
        store.getState().pageNumber
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          store.dispatch({
            type: actions.PUT_LIST_MOVIES,
            movieList: store.getState().movieList.concat(data.Search),
          });
        }
      })
      .catch((rej) => console.log(rej));
  };

  emptyOrFill = () => {
    if (
      store.getState().movieList !== undefined &&
      store.getState().movieList.length > 0
    ) {
      return (
        <>
          <div className="main__cards">
            {store.getState().movieList.map((el, index) => (
              <MovieCard key={index} movie={el} movieId={el.imdbID}></MovieCard>
            ))}
          </div>
          <button className="btn-load-more" onClick={this.fetchMore}>
            Load more...
          </button>
        </>
      );
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
