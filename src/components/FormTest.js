/**
 * Created by lmy2534290808 on 2017/5/12.
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
export default class FormTest extends Component {
    constructor(){
        super();
        this.state={
            value:""
        }
    }
    changeClick(e){
        this.setState({
            value:e.target.value
        })
    }
    componentDidUpdate(nextProps, nextState) {
        var input1=ReactDOM.findDOMNode(this.refs.input1);//获取真实的DOM节点
        console.log(input1.value);
       // alert(input1.value);
        input1.focus();
    }
    render() {
        return (<div>
            <input type="text" value="undefined"/><p>value属性设置后输入无效</p>
            <input type="text" ref="input1" value={this.state.value} onChange={this.changeClick.bind(this)}/>
        </div>);
    }
}
