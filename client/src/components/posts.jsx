import React from 'react';
import '../styles/posts.scss';

export default class Posts extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            expand: false
        }
    }

    shorten(text){
        if (!this.state.expand){
            return text.slice(0,200) + "..."
        } else {
            return text
        }
    }

    expandText(){
        this.setState({expand: !this.state.expand})
    }

    render(){
        const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing. "
        
        return (
            <div className="posts">
                <p className="content">
                    {this.shorten(text)}
                    <a 
                        href="#"
                        className="expander"
                        onClick={() => this.expandText()}>
                        {!this.state.expand ? "More" : "Less"}
                    </a>
                </p>
            </div>
        )
    }
}