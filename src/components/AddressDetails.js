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
import { ADDRESS_DETAILS } from 'constants/data'

class AddressDetailsComponent extends React.Component {
  addEntity() {
    
  }
  render() {
    const { owner, balance, sent, received } = this.props.addressDetails
    return (
      <div>
        <p>Owner: { owner ? owner : 'Unknown' }</p>
        { !owner ? (<button onClick={ () => this.addEntity() }>Add Entity</button>) : '' }
        <p>Balance: { balance }</p>
        <p>Sent: { sent }</p>
        <p>Received: { received }</p>
      </div>
    )
  }
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