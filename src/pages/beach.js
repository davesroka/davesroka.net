import React from 'react';
import Layout from '../components/layout';

import './beach.css';


const firstDayOfBeach = new Date(2021, 6, 5);

class Beach extends React.Component {

  constructor(props) {
    super(props);
    this.today = new Date(Date.now());
  }

  componentDidMount() {
    //set up timer and update state each time
    // if (Date.now())

  }

  render() {
    return (
      <div className={`background`}>
        <div className={`layout`}>
          <h1>Is it Beach yet?</h1>
          <p>No :(</p>
          <p>{`It's ${this.today}`}</p>
        </div>
      </div>
    );
  }
}

export default Beach;