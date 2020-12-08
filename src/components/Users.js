import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'
class Users extends Component {
  renderUsernames = () => {
    console.log(this.props.users)
    console.log(this.props.userCount)
    return this.props.users.map(user => <li>{user.username}</li>)
  }
  render() {
    return (
      <div>
        <div>
          <h4>User Count: {this.props.userCount}</h4>
        </div>
        <ul>
          Users!
          {this.renderUsernames()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users, userCount: state.users.length}
}

// connect this component to Redux

export default connect(mapStateToProps)(Users)
