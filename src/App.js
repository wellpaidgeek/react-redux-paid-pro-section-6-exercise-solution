import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EnhancedCheckboxGroup from './components/EnhancedCheckboxGroup';
import EnhancedCheckbox from './components/EnhancedCheckbox';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      main: undefined,
      side1: undefined,
      side2: undefined,
      showSelection: false,
      isDoublePortion: false,
    }
  }

  itemSelected (item) {
    this.setState((currentState) => {
      const newState = {
        ...currentState,
        ...item,
      };
      const { main, side1, side2 } = newState;
      if (main && side1 && side2) {
        return {
          ...newState,
          showSelection: true,
        }
      }
      return newState;
    });
  }

  toggleDoublePortion () {
    this.setState((currentState) => ({
      isDoublePortion: !currentState.isDoublePortion,
    }));
  }

  render () {
    const mains = [
      { id: 'chicken', value: 'chicken', label: 'Grilled Chicken' },
      { id: 'cod', value: 'cod', label: 'Steamed Cod' },
      { id: 'beef', value: 'beef', label: 'Roast Beef' },
    ];
    const side1s = [
      { id: 'potatoes', value: 'potatoes', label: 'Boiled Potatoes' },
      { id: 'rice', value: 'rice', label: 'Steamed Rice' },
    ];
    const side2s = [
      { id: 'carrots', value: 'carrots', label: 'Carrot' },
      { id: 'broccoli', value: 'broccoli', label: 'Broccoli' },
    ];
    const {
      showSelection,
      main,
      side1,
      side2,
      isDoublePortion,
    } = this.state;
    return (
      <div className="App">
        <h2>Monday</h2>
        { showSelection && <p>{`${main} with ${side1} and ${side2} ${isDoublePortion ? '(double portion)' : ''}`}</p> }
        <div className="container">
          <div>
            <h3>Main</h3>
            <EnhancedCheckboxGroup items={mains} onChange={(value) => this.itemSelected({ main: value })} />
          </div>
          <div>
            <h3>Side 1</h3>
            <EnhancedCheckboxGroup items={side1s} onChange={(value) => this.itemSelected({ side1: value })} />
          </div>
          <div>
            <h3>Side 2</h3>
            <EnhancedCheckboxGroup items={side2s} onChange={(value) => this.itemSelected({ side2: value })} />
          </div>
        </div>
        <div className="doublePortion">
          <EnhancedCheckbox
            label="Double Portion"
            id="double"
            value={true}
            selected={this.state.isDoublePortion}
            onChange={() => this.toggleDoublePortion()}
          />
        </div>
      </div>
    );
  }
}

export default App;
