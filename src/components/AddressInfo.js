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
    const { addressInfo } = this.props
    return (
      <p>
        { addressInfo.currency } / { addressInfo.address }
      </p>
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