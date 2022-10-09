import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
  const { name, username, id } = props.friend;
  return (
    <div>
      <h4>{name}</h4>
      <h5>
        @<Link to={`/friend/${id}`}>{username}</Link>
      </h5>
    </div>
  );
};

export default Friend;
