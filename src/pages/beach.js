import React from 'react';

import './beach.css';

const firstDayOfBeach = new Date(2021, 5, 5);

class Beach extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      today: new Date(),
      minutesUntilBeach: null,
      daysUntilBeach: null,
      millisecondsUntilBeach: null,
      hoursUntilBeach: null,
      secondsUntilBeach: null,
    };
  }

  componentDidMount() {
    //set up timer and update state each time
    // if (Date.now())

    this.updateTimeLeft();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTimeLeft() {
    // const today = new Date(
    //   2021,
    //   5,
    //   4,
    //   new Date().getHours(),
    //   new Date().getMinutes(),
    //   new Date().getSeconds()
    // );
    const today = new Date();
    const diffMs = firstDayOfBeach - today; // milliseconds between now & Christmas
    const diffDays = Math.floor(diffMs / 86400000); // days
    const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
    const diffSeconds = Math.round(
      (((diffMs % 86400000) % 3600000) % 60000) / 1000
    ); // minutes

    this.setState({
      today,
      millisecondsUntilBeach: diffMs,
      minutesUntilBeach: diffMins,
      hoursUntilBeach: diffHrs,
      daysUntilBeach: diffDays,
      secondsUntilBeach: diffSeconds,
    });

    this.timer = setInterval(() => this.updateTimeLeft(), 1000);
  }

  updateToday() {
    this.setState({ today: new Date() });
  }

  render() {
    const {
      today,
      millisecondsUntilBeach,
      daysUntilBeach,
      hoursUntilBeach,
      minutesUntilBeach,
      secondsUntilBeach,
    } = this.state;
    return (
      <div className={`background`}>
        <div className={`layout`}>
          <h1>Is it Beach yet?</h1>
          <p>{millisecondsUntilBeach <= 0 ? 'YES 🏖🏖🏖🏖🏖 !!!' : 'No :('}</p>
          <p>{`It's ${today.toLocaleString()}`}</p>
          <p>Beach is {firstDayOfBeach.toLocaleDateString()}</p>
          <p>
            There's still {daysUntilBeach} days {hoursUntilBeach} hrs{' '}
            {minutesUntilBeach} minutes {secondsUntilBeach} seconds left
          </p>
        </div>
      </div>
    );
  }
}

export default Beach;
