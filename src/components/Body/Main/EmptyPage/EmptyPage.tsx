import React from "react";
import "./EmptyPage.css";

class EmptyPage extends React.PureComponent<{}, {}> {
  render(): JSX.Element {
    return (
      <div className="empty-page">
        <h1>Ничего не найдено</h1>
      </div>
    );
  }
}

export default EmptyPage;
