import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { AiTwotoneEdit } from "react-icons/ai";
import AddUser from "./AddUser";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editForm: false,
    };
  }

  user = this.props.user;

  render() {
    return (
      <div className="user">
        <img className="avatar" src={this.user.avatar} />
        <IoCloseCircleSharp
          className="delete-icon"
          onClick={() => this.props.onDelete(this.user.id)}
        />
        <AiTwotoneEdit
          className="edit-icon"
          onClick={() => {
            this.setState({ editForm: !this.state.editForm });
          }}
        />
        <div className="bio">
          <h3>
            {this.user.first_name} {this.user.last_name}
          </h3>
          <p>{this.user.email}</p>
          <b>{this.user.isHappy ? "Happy :)" : "Not enough :("}</b>
        </div>
        {this.state.editForm && (
          <AddUser user={this.user} onAdd={this.props.onEdit} />
        )}
      </div>
    );
  }
}

export default User;
