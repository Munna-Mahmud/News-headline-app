import React from "react";
import Header from "./Components/Header";
import { newsCatagory } from './News/index';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-md-3">
           <Header catagory ={newsCatagory.sports}></Header>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
