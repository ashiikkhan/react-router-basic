import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
  return (
    <div>
      <h2>React Router Tutorial</h2>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
