import React from 'react';
import '../styles/feed.scss';
import Posts from './posts';

export default class Feed extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <div className="feed">
                <textarea
                    placeholder="what's the problem?"
                />
                <Posts/>
            </div>
        )
    }
}