import React ,{ Component } from 'react'

// react中装饰器：Hoc
const BorderHoc = WrappedComponent => class extends Component{
    render() {
        return <div style={{ border: 'solid 1px red'}}>
            <WrappedComponent/>
        </div>
    }
}
export default BorderHoc