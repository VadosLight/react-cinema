import React from "react";
import "./Table.css";
import TableElement from "./TableElement/TableElement";

class Table extends React.Component {
  render() {
    return (
      <table className="info__table">
        <TableElement name="Genre"      info={this.props.fullData.Genre}></TableElement>
        <TableElement name="Runtime"    info={this.props.fullData.Runtime}></TableElement>
        <TableElement name="Released"   info={this.props.fullData.Released}></TableElement>
        <TableElement name="DVD"        info={this.props.fullData.DVD}></TableElement>
        <TableElement name="Director"   info={this.props.fullData.Director}></TableElement>
        <TableElement name="Writer"     info={this.props.fullData.Writer}></TableElement>
        <TableElement name="Actors"     info={this.props.fullData.Actors}></TableElement>
        <TableElement name="Language"   info={this.props.fullData.Language}></TableElement>
        <TableElement name="Country"    info={this.props.fullData.Country}></TableElement>
        <TableElement name="Awards"     info={this.props.fullData.Awards}></TableElement>
        <TableElement name="Rated"      info={this.props.fullData.Rated}></TableElement>
      </table>
    );
  }
}

export default Table;
