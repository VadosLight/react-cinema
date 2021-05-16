import React from "react";
import { NavLink } from "react-router-dom";
import "./MovieCard.css";

type TMovieCardProps = {
  readonly movie: {
    readonly Title: string;
    readonly Poster: string;
    readonly Year: string;
  };
  readonly movieId: string;
  readonly key: number
}

class MovieCard extends React.PureComponent<TMovieCardProps> {
  readonly props: TMovieCardProps;

  cardWithLinkToMoreInfo = (): JSX.Element => {
    return (
      <NavLink
        to="/more"
        id={this.props.movieId}
        className="movie-card"

      >
        <img
          src={this.props.movie.Poster}
          alt={this.props.movie.Title}
          className="movie-card__img"
        />
        <p className="movie-card__title">
          {this.props.movie.Title.length > 25
            ? this.props.movie.Title.slice(0, 25) + "..."
            : this.props.movie.Title}
          <br />
          {this.props.movie.Year.slice(0, 4)}
        </p>
      </NavLink>
    );
  };

  render() {
    return this.cardWithLinkToMoreInfo();
  }
}

export default MovieCard;
