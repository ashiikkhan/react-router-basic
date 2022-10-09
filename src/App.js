import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import FriendDetails from './components/FriendDetails';
import Friends from './components/Friends';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import Posts from './components/Posts';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: 'home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        {
          path: 'friends',
          element: <Friends></Friends>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
        },
        {
          path: 'posts',
          element: <Posts></Posts>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts');
          },
        },
      ],
    },
    {
      path: '/friend/:friendId',
      element: <FriendDetails></FriendDetails>,
      loader: async ({ params }) => {
        return fetch(
          `https://jsonplaceholder.typicode.com/users/${params.friendId}`
        );
      },
    },

    {
      path: 'post/:postId',
      element: <PostDetails></PostDetails>,
      loader: async ({ params }) => {
        return fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.postId}`
        );
      },
    },
    { path: '*', element: <div>This route not found.</div> },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
