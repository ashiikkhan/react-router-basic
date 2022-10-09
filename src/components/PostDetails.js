import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { title, id } = postDetails;
  return (
    <div>
      <Header></Header>
      <h2>post id: {id}</h2>
      <h3>title: {title}</h3>
    </div>
  );
};

export default PostDetails;
