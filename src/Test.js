/**
 * Created by lmy2534290808 on 2017/5/11.
 */

import React, {Component} from 'react';
import DateTest from './components/DateTest';
import LikedButton from './components/LikedButton';
import ChildrenTest from './components/ChildrenTest';
export default  class Test extends Component {
    render() {
        return (
            <div><DateTest/><LikedButton/><ChildrenTest><a href="#">1</a>2</ChildrenTest>
            </div>
        );
    }
}