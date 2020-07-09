import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/userAction";
import { Link } from "react-router-dom";

class User extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <h2>User Page</h2>
        {this.props.users.map((user) => {
          return (
            <p key={user.id}>
              <Link to={`user/${user.id}`}>{user.name}</Link>
            </p>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ users: state.userReducer.users });
const mapDispatchToProps = { getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(User);
