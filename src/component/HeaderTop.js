import React, { Component } from "react";

class HeaderTop extends Component {
  render() {
    return (
      <div>
        <h2 className="ui icon center aligned header">
          <i aria-hidden="true" className="users circular icon" />
          <div className="content">Manage Prersonal</div>
        </h2>
        <img
          src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png"
          className="ui large centered image"
        />
      </div>
    );
  }
}

export default HeaderTop;
