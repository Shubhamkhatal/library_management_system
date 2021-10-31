import { Component } from "react";
import { Modal,ModalHeader,ModalBody,Form,FormGroup,Label,Input,ModalFooter,Button } from "reactstrap";
export default class CustomModal extends Component  {
    constructor(props) {
        super(props);
        this.state = {
          activeItem: this.props.activeItem,
        };
      }
      
      handleChange = (e) => {
        let { name, value } = e.target;
        const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
      };
      
      
      render() {
      
        const { toggle, onSave } = this.props;
        return (        
          <Modal isOpen={true} toggle={toggle}>
          <ModalHeader toggle={toggle}>Book Details</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="book-name">Name of Book</Label>
                <Input type="text" id="book-name" name="name" value={this.state.activeItem.name} onChange={this.handleChange}  placeholder="Enter Name Of Book" />
              </FormGroup>
              <FormGroup>
                <Label for="book-author">Author of book</Label>
                <Input type="text" id="book-author" name="author" value={this.state.activeItem.author} onChange={this.handleChange} placeholder="Enter Todo description"/>
              </FormGroup>
              <FormGroup>
                <Label for="todo-description">Publisher of book</Label>
                <Input
                  type="text" id="todo-description" name="publisher" value={this.state.activeItem.publisher} onChange={this.handleChange} placeholder="Enter Todo description" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={() => onSave(this.state.activeItem)}>Save </Button>
          </ModalFooter>
        </Modal>
          );
        }
      }


// export default Modal;