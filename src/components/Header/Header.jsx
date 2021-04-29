import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { openConst, privateConst } from "../../constants";
import store from "../../store";

class Header extends React.Component {
  fetchListMovies() {
    const TITLE = encodeURIComponent(
      document.getElementById("search-field__input").value
    );

    fetch(`${openConst.BASE_URL}?apikey=${privateConst.API_KEY}&s=${TITLE}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.Response === "False") {
          throw new Error("Пустой ответ");
        }
        store.dispatch({ type: "PUT_LIST_MOVIES", movieList: data.Search });
      })
      .catch((rej) => console.log(rej))
      .finally(() => {
        console.log("Хранилище ", store.getState());
      });
  }

  render() {
    return (
      <nav id="header">
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
