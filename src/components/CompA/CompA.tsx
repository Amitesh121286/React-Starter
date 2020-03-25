import * as React from 'react';

import './CompA.css';

export default class CompA extends React.Component {
    greeting: string = '-----> Hello CompA';

    componentDidMount() {

    }

    render() {

        const myname = 'CompA Amitesh';
        return (
            <div className="centerClrA">
                <p>{this.greeting} {myname}</p>
            </div>
        );
    }
}