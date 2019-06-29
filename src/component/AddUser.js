import React, { Component } from "react";

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      phone: "",
      permission: ""
    };
  }

  onChangeValueInputAdd = event => {
    var name = event.target.name;
    var value = event.target.value;

    this.setState({
      [name]: value
    });
  };
  /**Add */

  render() {
    return (
      <div>
        <form className="ui form">
          <a className="ui label">Add new personel</a>
          <div className="field">
            <label>Name</label>
            <input
              name="name"
              onChange={event => {
                this.onChangeValueInputAdd(event);
              }}
              placeholder="name..."
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              name="phone"
              onChange={event => {
                this.onChangeValueInputAdd(event);
              }}
              placeholder="number phone"
            />
          </div>
          <div className="field">
            <label>Right</label>
            <select
              onChange={event => {
                this.onChangeValueInputAdd(event);
              }}
              name="permission"
            >
              <option value>Select Permission</option>
              <option value={1}>Emloyee</option>
              <option value={2}>Client</option>
            </select>
          </div>
          <button
            onClick={data => this.props.AddItem(this.state)}
            type="reset"
            className="ui button"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddUser;
