import logo from './logo.svg';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyComponent from './example/MyComponent';
import ToDoList from './todoList/ToDoList';
import Nav from './Navition/Nav';
import Home from './todoList/Home'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}

         
          <Nav />
          <Switch>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/todo" >
               <ToDoList />
            </Route>
            <Route path="/AddJob">
              <MyComponent/>
            </Route>
          </Switch>



         
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover

        />





      </div>
    </BrowserRouter>

  );



}

export default App;
