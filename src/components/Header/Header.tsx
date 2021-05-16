import React from "react";
import { NavLink } from "react-router-dom";
import { sagaMiddleware } from "store";
import { resetPageCounter, fetchListMoviesByTitle, changeOrderSortBy } from "store/sagas"
import "./Header.css";

class Header extends React.Component<{}, {}> {
  fetchListMovies(): void {
    const title: string = encodeURIComponent(
      (document.getElementById("search-field__input") as HTMLInputElement).value
    );

    sagaMiddleware.run(resetPageCounter);
    sagaMiddleware.run(fetchListMoviesByTitle, title);
  }

  changeSortType(): void {
    const order: unknown = (document.getElementById("sortOption") as HTMLInputElement).value || "name A-Z";
    if (order === "name A-Z" || order === "name Z-A" || order === "Year min" || order === "Year max") {
      sagaMiddleware.run(changeOrderSortBy, order);
    }
  }

  render() {
    return (
      <nav id="header">
        <select id="sortOption" onChange={this.changeSortType}>
          <option selected value="name A-Z">name A-Z</option>
          <option value="name Z-A">name Z-A</option>
          <option value="Year min">Year min</option>
          <option value="Year max">Year max</option>
        </select>

        <NavLink to="/about">About</NavLink >

        <NavLink to="/">Main</NavLink >

        <div id="search-field">
          <input id="search-field__input" type="text" />
          <NavLink to="/" id="search-field__btn" onClick={this.fetchListMovies}>
            Поиск
          </NavLink >
        </div>

      </nav>
    );
  }
}

export default Header;
