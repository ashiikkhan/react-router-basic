import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
  const { title, body, id } = post;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div>
      <h5>{title}</h5>
      <p>{body}</p>
      <Link to={`/post/${id}`}>
        <button>Show Details </button>
      </Link>
      <button onClick={handleNavigate}>Show Details 2</button>
    </div>
  );
};

export default Post;
