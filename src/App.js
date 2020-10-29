import React from 'react';
import Random from './components/Random';
import { Profile } from './components/Profile';
import { Directory } from './components/Directory'
import './App.css';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: null,
    };
  }

  handleChoose = (newUsername)=> {
    this.setState({ currentUsername: newUsername });
  }

  handleReturnToDirectoryClick = () =>{
    this.setState({ currentUsername: null });
  }

  render() {
    let body;
    if (this.state.currentUsername) {
      body = (
        <Profile
          username={this.state.currentUsername}
          onChoose={this.handleChoose}
        />
      );
    } else {
      body = <Directory onChoose={this.handleChoose} />;
    }

    return (
      <div className="App">
       <Random />
        <header>
          <h1>PetBook</h1>
         
          <nav>
            {this.state.currentUsername && (
              <button onClick={this.handleReturnToDirectoryClick}>
                Return to directory
              </button>
            )}
          </nav>
        </header>

        <main>{body}</main>
      </div>
    );
  }
}
