import React, { Component } from 'react';
import './App.css';
import iconurl from './icon/爱心.png'
import Main from './Main'
class App extends Component {
  state = {
    class: 'bounceInLeft',
    show: false,

  };

  render() {

    const main = () => {
      if (this.state.show)
        return <Main />
    }
    return (
      <div>
        <div className={"envelope animated " + this.state.class}>
          <div className="triangle-down"></div>
          <img className="heart" src={iconurl} onClick={() => {
            this.setState({ class: 'bounceOutRight', show: true })
          }} />
          <div className="triangle-up"></div>
          <div className="text">You received a letter, click to check it!
</div>
        </div>
        {main()}
      </div>
    );
  }
}

export default App;
