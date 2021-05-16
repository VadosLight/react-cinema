import React from "react";
import store from "store";
import { connect } from "react-redux";
import "./More.css";
import Table from "./Table/Table";
// import * as T from "types/storeTypes"

class More extends React.PureComponent {
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
                {fullData.imdbRating} /{" "}
                <span>{parseInt(fullData.imdbVotes)}K</span>
              </span>
              ({[fullData.Type, " ", fullData.Year.slice(0, 4)]})
            </h1>

            <h3>{fullData.Plot}</h3>

            <h2 className="info__about">About</h2>
            
            {/* JSX element class does not support attributes because 
            it does not have a 'props' property.ts(2607)
            'Table' cannot be used as a JSX component.
            Its instance type 'Table' is not a valid JSX element.
            Type 'Table' is missing the following properties from type 'ElementClass': context, setState, forceUpdate, props, and 2 more.ts(2786) */}
            <Table fullData={fullData} />
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
