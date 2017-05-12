/**
 * Created by lmy2534290808 on 2017/5/11.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
export default class DateTest extends Component {
    constructor(props) {
        super(props);
        this.state={
            click:new Date()
        }
    }

    static propTypes = {
        formatStr: PropTypes.string
    }

    componentDidMount() {
        this.interval = window.setInterval(() => {
            this.setState({
                click:new Date()
            })
        }, 1000);
    }
   componentWillUnmount(){
        clearInterval(this.interval);
        console.log("-------------------------");
   }
    render() {
        return (<div>
            <p>{this.state.click.toLocaleString()}</p></div>)
    }
}