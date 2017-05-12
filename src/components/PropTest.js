/**
 * Created by lmy2534290808 on 2017/5/12.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
export default class PropTest extends Component {
    static propTypes={
        name:PropTypes.string.isRequired,
        sex:PropTypes.string.isRequired
    }
    render() {
        var call=this.props.sex==='男'?"先生":'女士';
        return (<div>你好！{this.props.name}{call}</div>);
    }
}
