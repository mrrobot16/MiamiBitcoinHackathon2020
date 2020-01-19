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
  
  getAddress() {
    get(endpoints.address + '/18hmroHs5QgLGzrY93ctQmyChEUQBiut8X')
  }
  
  componentDidMount(){
    this.getAddress()
  }
  render(){
    return (
      <div>
        <SearchAddressInput />
        <AddressInfo />
        <AddressDetails />
        <TransactionsTable />
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
