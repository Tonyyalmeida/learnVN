import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <NameListComponent/>
        <Texting/>
        <InputMe/>
        <DevTools />
      </div>
    );
  }
};

@inject("appState") @observer
class NameListComponent extends Component {
  render() {
    return (
  <div>
    {this.props.appState.listing.map( (c) => (
      <Texting function={this.props.appState.increment} name={c.name1} key={c.id}/>
    ))}
  </div>
    );
  }
};

//Working well
// let Texting = props => {
// return (<div><h2 onClick={() => props.function(props.name)}>{props.name}</h2></div>)
// }

@inject("appState") @observer
class Texting extends Component {
  render() {
return (<div><h2 onClick={() => this.props.appState.increment(this.props.name)}>{this.props.name}</h2></div>)
  }
};

@inject("appState") @observer
class InputMe extends Component {
  render(){
    return (
      <input onKeyPress={(e) => this.props.appState.addNew(e) } type="text"></input>
    )
  }
}

/*
@observer
class Texting extends Component {
  render() {
    return (
      <div>
        <h2>
          {this.props.props}
        </h2>
      </div>
    );
  }
};*/

export default App;
