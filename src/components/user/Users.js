import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add_User, del_User} from '../../store/Actions/Actions';

let Name = '';
class Users extends Component {
  nameChangeHandler = (e) => {
    Name = e.target.value;
  };

  render() {
    return (
      <>
        <form onSubmit={this.props.addName}>
          <input type="text" onChange={this.nameChangeHandler} />
          <button type="submit">ADD USER</button>
        </form>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id} onClick={() => this.props.deleteHandler(user.id)}>
              {user.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
const mapDispatch = (dispatch) => {
  let clickCount = 0;
  return {
    addName: (e) => {
      e.preventDefault();
      clickCount = clickCount + 1;
      dispatch(add_User(Name, 'USER' + clickCount));
    },
    deleteHandler: (id) => {
      dispatch(del_User(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatch)(Users);
