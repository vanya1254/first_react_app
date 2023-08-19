import React from "react";

class AddUser extends React.Component {
  userAdd = {};

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      age: 1,
      avatar:
        "https://e7.pngegg.com/pngimages/853/805/png-clipart-computer-icons-facebook-female-online-dating-service-profile-head-woman.png",
      isHappy: false,
    };
  }

  render() {
    return (
      <form ref={(el) => (this.myForm = el)}>
        <input
          placeholder="Firstname"
          onChange={(e) => this.setState({ first_name: e.target.value })}
        />
        <input
          placeholder="Lastname"
          onChange={(e) => this.setState({ last_name: e.target.value })}
        />
        <input
          placeholder="Email"
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <input
          placeholder="Age"
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <input
          placeholder="Avatar link"
          onChange={(e) =>
            this.setState({
              avatar: e.target.value.length
                ? e.target.value
                : this.state.avatar,
            })
          }
        />
        <label htmlFor="isHappy">Is happy?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(e) => this.setState({ isHappy: e.target.checked })}
        />
        <button
          type="button"
          onClick={() => {
            this.myForm.reset();
            this.userAdd = {
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              age: this.state.age,
              avatar: this.state.avatar,
              isHappy: this.state.isHappy,
            };
            if (this.props.user) {
              this.userAdd.id = this.props.user.id;
            }
            this.props.onAdd(this.userAdd);
          }}
        >
          Add
        </button>
      </form>
    );
  }
}

export default AddUser;
