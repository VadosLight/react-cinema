import React from "react";
import "./Table.css";
import TableElement from "./TableElement/TableElement";

// type TTableProps = {
//   fullData: {
//     Director?: string;
//     DVD?: string;
//     Awards?: string;
//     Genre: string;
//     Runtime: string;
//     Writer: string;
//     Actors: string;
//     Language: string;
//     Country: string;
//     Rated: string;
//     Released: string;
//   }
// }

class Table extends React.Component {
  // props: TTableProps;
  render() {
    return (
      <table>
        <tbody className="info__table">
          <TableElement name="Genre" info={this.props.fullData.Genre}></TableElement>
          <TableElement name="Runtime" info={this.props.fullData.Runtime}></TableElement>
          <TableElement name="Released" info={this.props.fullData.Released}></TableElement>
          <TableElement name="DVD" info={this.props.fullData.DVD}></TableElement>
          <TableElement name="Director" info={this.props.fullData.Director}></TableElement>
          <TableElement name="Writer" info={this.props.fullData.Writer}></TableElement>
          <TableElement name="Actors" info={this.props.fullData.Actors}></TableElement>
          <TableElement name="Language" info={this.props.fullData.Language}></TableElement>
          <TableElement name="Country" info={this.props.fullData.Country}></TableElement>
          <TableElement name="Awards" info={this.props.fullData.Awards}></TableElement>
          <TableElement name="Rated" info={this.props.fullData.Rated}></TableElement>
        </tbody>
      </table>

    );
  }
}

export default Table;
