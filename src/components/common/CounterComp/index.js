import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CounterComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true
        };
      }
      static getDerivedStateFromProps(nextProps, prevState) {
       if (prevState.clicks !== nextProps.value) {
          return { clicks: nextProps.value };
        }
        return null;
    }
    
      IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
      }
      DecreaseItem = () => {
        if(this.state.clicks>0){
        this.setState({ clicks: this.state.clicks - 1 });
        }
      }
      ToggleClick = () => {
        this.setState({ show: !this.state.show });
      }
    
      render() {
        return (
          <div>
             <button className="btn btn-light" data-toggle="tooltip" onClick={this.DecreaseItem}>-</button> 
              { this.state.clicks }
              <button className="btn btn-light" data-toggle="tooltip" onClick={this.IncrementItem}>+</button> 
          </div>
        );
      }
}


export default CounterComp;
