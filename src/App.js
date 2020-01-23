import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { connect} from 'react-redux'
import Main from './containers/main'
class App extends Component {


  render() {

      return (
        <div className = "App">
          <Main/>
        </div>
      );
    

  }
}

const mapStateToProps = state => {
  return{

  };
}

const mapDispatchToProps = dispatch => {
  return{

  };
}

export default connect(mapStateToProps,mapDispatchToProps)(App);