import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';

const FriendDetails = () => {
  const friendDetails = useLoaderData();
  const { name, username, email, phone, id } = friendDetails;
  return (
    <div>
      <Header></Header>
      <div>
        <h2>Friend {id} Details Component</h2>
        <h4>Name: {name}</h4>
        <h4>User Name: @{username}</h4>
        <h4>Email: {email}</h4>
        <h4>Phone: {phone}</h4>
      </div>
    </div>
  );
};

export default FriendDetails;
