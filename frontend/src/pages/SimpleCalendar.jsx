import React, { Component } from 'react';
import Calendar from 'react-calendar';


 
class SimpleCalendar extends Component {
  constructor(props) {
    super(props);
    this.stateModal = { show: false };
    this.state = {
      date: new Date(),
    }
    
}

  OnClickDay = (e) => {
    alert('Click happened '+ JSON.stringify(e) );
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={(e)=>{this.OnClickDay(e);}}
        />
      </div>
    );
  }
}

export default SimpleCalendar;