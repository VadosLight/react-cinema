import React from "react";
import "./TableElement.css";

class TableElement extends React.Component {
  render() {
    return (
      <tr className="info__table-row">
        <td className="info__table-name">{this.props.name}</td>
        <td className="info__table-info">{this.props.info}</td>
      </tr>
    );
  }
}

export default TableElement;
