import React, {  Component } from 'react';
import Navbar from "./Components/Navbar";
import AddUser from "./Components/AddUser";
import Users from "./Components/Users";


import './App.css';

//JSX : js içinde html kullanmamızı sağlar  
//JSX bir tane parent element dönebilir
//js ifadeleri için {} kullanmalıyız
class App extends Component {
  
    render() {

      return(
        <div className="container">
          
          <Navbar title = "User app"/>
          <Navbar/>
          <hr/>

          <AddUser/>

          <Users/>

        </div>

      );
    }
}

export default App;
