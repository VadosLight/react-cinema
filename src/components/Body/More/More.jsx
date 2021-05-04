import React from "react";
import "./More.css";
import store from "store";
import { connect } from "react-redux";

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
          <h1>{fullData.Title}</h1>
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
