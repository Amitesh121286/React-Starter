import * as React from 'react';

import './CompB.css';

export default class CompB extends React.Component {
    greeting: string = '-----> Hello CompB';

    componentDidMount() {

    }

    render() {

        const myname = 'CompB Amitesh';
        return (
            <div className="centerClrB">
                <p>{this.greeting} {myname}</p>
            </div>
        );
    }
}