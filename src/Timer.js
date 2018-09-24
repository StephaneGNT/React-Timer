import React, {Component} from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }

  componentWillMount() {
    alert('Ca va commencer');
  }

  componentDidUpdate() {
    console.log('Le composant a été mis à jour');
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => {
        this.setState({
          counter: this.state.counter + 1
        });
      },
      1000
    );
  }

  render() {
    return (
      <div>
        <h2>Vous êtes présent depuis {this.state.counter} secondes</h2>
      </div>
    );
  }
}

export default Timer;