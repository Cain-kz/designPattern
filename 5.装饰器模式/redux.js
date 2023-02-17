import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import action from './action'

class App extends Component{
    render() {
        //App的业务逻辑
    }
}
function mapStateToProps(state) {
    //假设app的状态对应状态树上的app节点
    return state.app
}
function mapDispatchToProps(dispatch){
    // 
    return bindActionCreators(action, dispatch)
}

// 把App组件与Redux绑定在一起
export default connect(mapStateToProps, mapDispatchToProps)