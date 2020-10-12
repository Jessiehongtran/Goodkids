import React from 'react';
import '../styles/nav.scss';

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="nav">
                <h1>Good kids</h1>
                <p>Make parenting right</p>
            </div>
        )
    }
}