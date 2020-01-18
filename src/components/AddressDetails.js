import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from 'redux/counter'


class AddressDetailsComponent extends React.Component {
  render() {
    const { owner, balance, sent, received } = this.props.addressDetails
    return (
      <div>
        <p>Owner: { owner ? owner : 'Unknown' }</p>
        <p>Balance: { balance }</p>
        <p>Sent: { sent }</p>
        <p>Received: { received }</p>
      </div>
    )
  }
}

const ADDRESS_DETAILS = {
  owner: 'Alphabet Inc', 
  balance: 63.58909002, 
  sent: '63.58909002', 
  received: '63.58909002',
}

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  addressDetails: ADDRESS_DETAILS,
})

const bindedActions = {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}
const mapDispatchToProps = dispatch => bindActionCreators(bindedActions, dispatch)
const AddressDetails = connect(mapStateToProps, mapDispatchToProps)(AddressDetailsComponent)

export default AddressDetails