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
import CreateEntity from './CreateEntity'

class AddressDetailsComponent extends React.Component {

  render() {
    const { owner, balance, sent, received } = this.props.addressDetails
    return (
      <div className="card bg-dark border-0">
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <p>
                <span className="mr-2">Owner</span>
                <a href="#" className="text-link">
                  { owner ? owner : 'Unknown' }
                  { !owner ? (<CreateEntity />) : '' }
                </a>
              </p>
              <div>
                <span className="mr-2">Balance</span>
                <span className="text-warning font-weight-bold">{ balance } BTC</span>
              </div>
            </div>
            <div className="col-6 text-right">
              <p>
                <span className="mr-2">Sent</span>
                <span className="text-danger font-weight-bold">{ sent } BTC</span>
              </p>
              <div>
                <span className="mr-2">Received</span>
                <span className="text-success font-weight-bold">
                  { received } BTC
                </span>
              </div>
            </div>
          </div>
        </div>
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
