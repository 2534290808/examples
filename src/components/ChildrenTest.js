/**
 * Created by lmy2534290808 on 2017/5/12.
 */
import React,{Component} from 'react';
export default  class ChildrenTest extends Component{
    render(){
        return(<ul>
            {React.Children.map(this.props.children,function(child){
                return(<li>{child}</li>)
            })}
        </ul>)
    }
}
