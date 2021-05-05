import React from "react";
import store from "store";
import { connect } from "react-redux";
import "./More.css";
import TableElement from "./TableElement/TableElement";

class More extends React.Component {
  getFullData = () => {
    const fullData = store.getState().movieMore;

    return (
      <div className="more">
        <img
          className="more__background"
          src={fullData.Poster}
          alt={fullData.Title}
        ></img>

        <div className="more-container">
          <img
            className="more-container__poster"
            src={fullData.Poster}
            alt={fullData.Title}
          ></img>

          <div className="more-container__info">
            <h1>
              <span className="title__name">{fullData.Title}</span>
              <span className="title__rating">
                {fullData.imdbRating} / <span>{parseInt(fullData.imdbVotes)}K</span>
              </span>
              ({[fullData.Type, " ", fullData.Year.slice(0, 4)]})
            </h1>
            <h3>{fullData.Plot}</h3>

            <h2 className="info__about">About</h2>
            <table className="info__table">
              <TableElement name="Genre" info={fullData.Genre}></TableElement>
              <TableElement
                name="Runtime"
                info={fullData.Runtime}
              ></TableElement>
              <TableElement
                name="Released"
                info={fullData.Released}
              ></TableElement>
              <TableElement name="DVD" info={fullData.DVD}></TableElement>
              <TableElement
                name="Director"
                info={fullData.Director}
              ></TableElement>
              <TableElement name="Writer" info={fullData.Writer}></TableElement>
              <TableElement name="Actors" info={fullData.Actors}></TableElement>
              <TableElement
                name="Language"
                info={fullData.Language}
              ></TableElement>
              <TableElement
                name="Country"
                info={fullData.Country}
              ></TableElement>
              <TableElement name="Awards" info={fullData.Awards}></TableElement>
              <TableElement name="Rated" info={fullData.Rated}></TableElement>
            </table>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.getFullData()}</div>;
  }
}

const mapStateToProps = function (state) {
  return {
    movieMore: state,
  };
};

export default connect(mapStateToProps)(More);
