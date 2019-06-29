import React, { Component } from "react";
import "./App.css";
import HeaderTop from "./component/HeaderTop";
import Search from "./component/Search";
import TableData from "./component/TableData";
import AddUser from "./component/AddUser";
import dataUser from "./data.json";
import EditUser from "./component/EditUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataUser,
      dataSeek: "",
      showForm: true,
      dataEdit: ""
    };
  }
  DataSearch = data => {
    this.setState({
      dataSeek: data
    });
    console.log("TCL: App -> DataSearch -> data", this.state.dataSeek);
  };
  /***Add */
  /* Random ID */
  rd4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  AutoId = () => {
    return this.rd4() + this.rd4() + "_" + this.rd4() + this.rd4();
  };
  AddItem = data => {
    console.log("TCL: App -> AddItem -> date", data);
    var datas = this.state.data;
    var itemNew = {};
    itemNew.id = this.AutoId();
    itemNew.name = data.name;
    itemNew.phone = data.phone;
    itemNew.permission = data.permission;
    datas.push(itemNew);
    this.setState({
      data: datas
    });
    console.log("TCL: App -> data", this.state.data);
  };
  /***edit */
  Edit = data => {
    console.log("TCL: App -> Edit -> data", data);
    this.setState({
      showForm: false,
      dataEdit: data
    });
    console.log("TCL: editData", this.state.dataEdit);
  };
  Hiden = dataEdit => {
    console.log("TCL: Hiden -> data", dataEdit.name);
    console.log("TCL: Hiden -> showForm");
    this.state.data.forEach(data => {
      if (data.id === dataEdit.id) {
        data.name = dataEdit.name;
        data.phone = dataEdit.phone;
        data.permission = dataEdit.permission;
      }
    });
    this.setState({
      showForm: true
    });
  };
  //****delected */
  ItemID = dataId => {
    console.log("TCL: ItemID -> dataId", dataId);
    var { data } = this.state;
    data.forEach(item => {
      if (item.id === dataId) {
        data.splice(item.id, 1);
      }
      this.setState({
        data: data
      });
      console.log("TCL: App -> data", data);
    });
  };
  render() {
    console.log("TCL: App -> constructor -> data", this.state.data);
    //search*********
    var dataChange = [];
    this.state.data.filter(item => {
      if (item.name.toLowerCase().indexOf(this.state.dataSeek) !== -1) {
        dataChange.push(item);
      } else if (item.phone.toLowerCase().indexOf(this.state.dataSeek) !== -1) {
        dataChange.push(item);
      }
    });
    console.log("TCL: App -> render -> dataChange", dataChange);
    return (
      <div>
        <HeaderTop />
        <div className="ui vertically divided grid">
          <div className="allcolumn">
            <div className="column1">
              <Search DataSearch={data => this.DataSearch(data)} />
              {/* this.state.dataSeek ===""? this.state.data : dataChange 
            Check if input === "" show all item, else show item has change 
           */}
              <TableData
                ItemID={dataId => this.ItemID(dataId)}
                Edit={data => this.Edit(data)}
                DataUser={
                  this.state.dataSeek === null ? this.state.data : dataChange
                }
              />
            </div>
            <div className="column2">
              {this.state.showForm === true ? (
                <AddUser
                  AddItem={data => {
                    this.AddItem(data);
                  }}
                  Edit={data => this.Edit(data)}
                />
              ) : (
                <EditUser Hiden={this.Hiden} Edit={this.state.dataEdit} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
