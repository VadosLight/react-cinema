import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { openConst, privateConst } from "../../constants";
import store, { actions } from "../../store";
import * as sortBy from "./utils";

class Header extends React.Component {
  fetchListMovies() {
    const TITLE = encodeURIComponent(
      document.getElementById("search-field__input").value
    );

    fetch(`${openConst.BASE_URL}?apikey=${privateConst.API_KEY}&s=${TITLE}`)
      .then((res) => res.json())
      .then((data) => {
        store.dispatch({
          type: actions.PUT_LIST_MOVIES,
          movieList: data.Search,
        });
      })
      .catch((rej) => console.log(rej));
  }

  changeSortType() {
    const sortSelector = document.getElementById("sortOption").value;
    let sortedList = store.getState().movieList;

    store.dispatch({
      type: actions.CHANGE_ORDER_SORT,
      sortBy: sortSelector,
    });

    switch (sortSelector) {
      case "name A-Z":
        sortedList = sortBy.sortObjectAZ({ obj: sortedList });
        break;
      case "name Z-A":
        sortedList = sortBy.sortObjectZA({ obj: sortedList });
        break;
      case "Year min":
        sortedList = sortBy.sortObjectYearMin({ obj: sortedList });
        break;
      case "Year max":
        sortedList = sortBy.sortObjectYearMax({ obj: sortedList });
        break;
      default:
        break;
    }

    store.dispatch({
      type: actions.PUT_LIST_MOVIES,
      movieList: sortedList,
    });
  }

  render() {
    return (
      <nav id="header">
        <select id="sortOption" onChange={this.changeSortType}>
          <option>name A-Z</option>
          <option>name Z-A</option>
          <option>Year min</option>
          <option>Year max</option>
        </select>
        <Link to="/about">About</Link>
        <Link to="/">Main</Link>
        <div id="search-field">
          <input id="search-field__input" type="text" />
          <button id="search-field__btn" onClick={this.fetchListMovies}>
            Поиск
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
