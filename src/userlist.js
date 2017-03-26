import React from 'react';

const UserList = ({users}) => {
  return (
    <div>
      <h1>Users</h1>
      <ul className="list-group">
        { users.map(user => (<li key={user.id} className="list-group-item">{user.name}</li>)) }
      </ul>
    </div>
  );
};

export default UserList;
