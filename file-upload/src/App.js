import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleInputSubmit = this.handleInputSubmit.bind(this)
  }

  state = {
    lo: false,
    num: 1
  }

  handleInputChange(e) {
    this.setState({
      file: e.target.files[0]
    });
  }

  handleInputSubmit(e) {
    this.setState({
      num: this.state.num + 1
    });
    let data = new FormData();
    const url = 'http://localhost:8080/api/files/fileUplo' + this.state.num + '.jpeg';
    data.append('file', this.state.file);

    axios.post(url, data)
      .then(function (response) {
        console.log("file uploaded!", data);
      })
      .catch(function (error) {
        console.log("failed file upload", error);
      });
  }
  render() {
    const url = 'http://localhost:8080/api/files/fileUplo' + this.state.num + '.jpeg';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="file" id="file" onChange={this.handleInputChange} />
          <button onClick={this.handleInputSubmit}>
            Send
        </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <img src={url} />
        </header>
      </div>
    );
  }

}

export default App;
