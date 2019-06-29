import React, { Component } from "react";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.Edit.id,
      name: this.props.Edit.name,
      phone: this.props.Edit.phone,
      permission: this.props.Edit.permission
    };
    
  }

  onChangeValueInputEdit = event => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    });
    console.log("TCL: EditUser -> constructor -> this.state", this.state)
  };


  render() {
    return (
      <div className="blue">
        <form className="ui form">
          <a className="ui label">Edit user</a>

          <div className="field">
            <label>Name</label>
            <input
              defaultValue={this.props.Edit.name}
              name="name"
              onChange={event => {
                this.onChangeValueInputEdit(event);
              }}
              placeholder="name..."
            />
          </div>
          <div className="field">
            <label>Phone</label>
            <input
              defaultValue={this.props.Edit.phone}
              name="phone"
              onChange={event => {
                this.onChangeValueInputEdit(event);
              }}
              placeholder="number phone"
            />
          </div>
          <div className="field">
            <label>Right</label>
            <select
              defaultValue={this.props.Edit.permission}
              onChange={event => {
                this.onChangeValueInputEdit(event);
              }}
              name="permission"
            >
              <option value>Select Permission</option>
              <option value={1}>Emloyee</option>
              <option value={2}>Client</option>
            </select>
          </div>
          <button onClick={(dataEdit)=>this.props.Hiden(this.state)} type="reset" className="ui button">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default EditUser;
