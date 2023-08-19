import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1";

class App extends React.Component {
  constructor(props) {
    super(props);

    axios.get(baseUrl).then((res) => {
      this.setState({users: res.data.data});
      console.log(res.data.data[0].first_name)
    });

    this.state = {
      users: []
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  render() {
    return (
      <div>
        <Header title="List of users" />
        <main>
          <Users
            users={this.state.users}
            onDelete={this.deleteUser}
            onEdit={this.editUser}
          />
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    );
  }

  deleteUser(id) {
    this.setState({ users: this.state.users.filter((user) => user.id !== id) });
  }

  editUser(user) {
    let allUser = this.state.users;
    allUser[user.id - 1] = user;
    this.setState({ users: [] }, () => this.setState({ users: [...allUser] }));
    // console.log(user);
  }

  addUser(user) {
    const id = this.state.users.length + 1;
    // console.log(user);
    this.setState({ users: [...this.state.users, { id, ...user }] });
  }
}

export default App;
