/**
 * Created by lmy2534290808 on 2017/5/11.
 */
import React, {Component} from 'react';
export default class LikedButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: true
        }
    }

    handleClick() {
        this.setState({
            liked: !this.state.liked
        })
    }

    render() {
        var text = this.state.liked ? 'like' : "don't like";
        return (<div><p onClick={this.handleClick.bind(this)}>you {text} this,click to toggle</p></div>);
    }
}