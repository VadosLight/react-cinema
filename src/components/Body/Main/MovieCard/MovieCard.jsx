import React from "react";
import "./MovieCard.css";

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
          src={this.props.movie.Poster}
          alt={this.props.movie.Title}
          className="movie-card__img"
        />
        <span className="movie-card__title">
          {this.props.movie.Title}
          <br />
          {this.props.movie.Year}
        </span>
      </div>
    );
  }
}

export default MovieCard;
