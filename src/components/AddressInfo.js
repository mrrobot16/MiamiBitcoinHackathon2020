import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from 'redux/counter'
import { ADDRESS_INFO } from 'constants/data'

class AddressInfoComponent extends React.Component {
  render() {
    const { addressInfo, address } = this.props
    return (
     <div className="row align-items-center py-4">
       <div className="col-10">
         <h3 className="font-weight-bolder m-0">
           { addressInfo.currency } / <span className="text-danger">{ address }</span>
         </h3>
       </div>
       <div className="col-2 h-100">
         <button className="btn btn-outline-danger float-right">Report Scam</button>
       </div>
     </div>
    )
  }
}

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  addressInfo: ADDRESS_INFO
})

const bindedActions = {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
}

const mapDispatchToProps = dispatch => bindActionCreators(bindedActions, dispatch)

const AddressInfo = connect(mapStateToProps, mapDispatchToProps)(AddressInfoComponent)

export default AddressInfo
