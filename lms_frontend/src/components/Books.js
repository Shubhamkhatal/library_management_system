
import React, { Component } from "react";
import axios from 'axios';
import Modal from "./Modal";
export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bookList: [],
          modal: false,
          activeItem: {
            name: "",
            author: "",
            publisher: "",
          },
        };
      }
      componentDidMount() {
        this.refreshList();
      }
      refreshList = () => {
        axios.get("/books/")
          .then((res) => this.setState({ bookList: res.data }))
          .catch((err) => console.log(err));
      };
      toggle = () => {
        this.setState({ modal: !this.state.modal });
      };
      handleSubmit = (item) => {
        this.toggle();
        if (item.id) {
          axios
            .put(`/books/${item.id}/`, item)
            .then((res) => this.refreshList());
          return;
        }
        axios
          .post("/books/", item)
          .then((res) => this.refreshList());
      };
      handleDelete = (item) => {
        axios
          .delete(`/books/${item.id}/`)
          .then((res) => this.refreshList());
    
      };
      createItem = () => {
        const item = { name: "", author: "", publisher:"" };
    
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
    
      editItem = (item) => {
        this.setState({ activeItem: item, modal: !this.state.modal });
      };
      
    render(){
        return(
            <>
             <div>
             <button className="btn btn-lg btn-primary my-2 mx-3" onClick={this.createItem}>Add New Book</button>
             <table className="table">
             <thead>
            <tr>
            <th scope="col">Id</th>
             <th scope="col">Name of Book</th>
             <th scope="col">Author of Book</th>
             <th scope="col">Publisher of Book</th>
             <th scope="col">Actions</th>
             </tr>
             </thead>

             {this.state.bookList.map((item)=>
             
             <tr className="my-2">
             <td key={item.id}>{item.id}</td>
             <td>{item.name}</td>
             <td>{item.author}</td>
             <td>{item.publisher}</td>
             <td><button className="mx-2 btn" onClick={() => this.editItem(item)} >Edit </button>
            <button className="btn"  onClick={() => this.handleDelete(item)}> Delete </button>
            </td>
             </tr>
             )}
             </table>
             {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
         </div>
            </>
        );
    }
}