import React from 'react';
import FormikForm from "./components/Form";
import Users from "./components/users";
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch("http://localhost:5000/api/restricted/data")
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log("test", res);
      this.setState({ users: res });
      console.log("users:", this.state.users)
    })
    .catch(err => {
      console.log(err);
    });
  };

  render() {
    return (
      <div className="App">
        <h2 className="Header" data-testid="headerTest">App Registration</h2>
        <FormikForm />
        <div className="Food">
          {this.state.users.map(item => (
            <Users props={item} />
          ))}
          {/* <Users props={this.state.users}/> */}
          </div>
      </div>
    );
  }
}
// <Users props={this.state.users}/>

export default App;