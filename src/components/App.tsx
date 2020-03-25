import * as React from 'react';

import './App.css';
import CompA from './CompA/CompA';
import CompB from './CompB/CompB';

export default class Text extends React.Component {
  greeting: string = 'Hello ';

  componentDidMount() {

  }

   render() {

    const myname = 'Amitesh';
    return (
      <div className="centerC">

        <p>Dev branch Testing the page!!!!!</p>
        <p>{this.greeting} {myname}</p>

        <CompA/>
        <CompB />
      </div>
    );
  }
}