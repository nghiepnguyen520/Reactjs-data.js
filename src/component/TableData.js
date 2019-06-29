import React, { Component } from "react";

class TableData extends Component {
  render() {
    var items = this.props.DataUser.map((item, index) => {
      return (
        <tr key={index}>
          <td className="stt">{index+1}</td>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>{item.permission === 1 ? "Emloyee" : "Client"}</td>
          <td className="Acction">
            <button  onClick={(dataId)=>this.props.ItemID(item.id)} className="ui red button">Delect</button>
            <button onClick={(data)=>this.props.Edit(item)} className="ui blue button">Edit</button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Right</th>
              <th>Acction</th>
            </tr>
          </thead>
          {items}
          <tbody />
        </table>
      </div>
    );
  }
}

export default TableData;
