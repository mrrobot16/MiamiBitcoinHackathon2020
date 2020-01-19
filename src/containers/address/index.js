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
import {
  SearchAddressInput,
  AddressInfo,
  AddressDetails,
  TransactionsTable,
} from 'components'
import { get } from 'utils/http'
import { endpoints } from 'constants/endpoints'

class Address extends React.Component {
  id  = this.props.match.params.id

  getAddress() {
    get(`${endpoints.address}/${this.id}`)
  }

  componentDidMount(){
    this.getAddress()
  }
  render(){
    const address = this.props.match.params.address;
    return (
      <div className="container">
        <SearchAddressInput />
        <div className="col">
          <AddressInfo address={address}/>
          <AddressDetails />
          <div className="my-4">
            <h4>Transactions</h4>
          </div>
          <TransactionsTable />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address)
