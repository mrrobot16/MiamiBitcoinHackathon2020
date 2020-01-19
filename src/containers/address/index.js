import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
}                    from 'redux/counter'
import {
  SearchAddressInput,
  AddressInfo,
  AddressDetails,
  TransactionsTable,
  IconComponent
}                    from 'components'
import { get }       from 'utils/http'
import { endpoints } from 'constants/endpoints'

class Address extends React.Component {
  id  = this.props.match.params.id
  address = this.props.match.params.address;
  state = {
    addressData: {}
  }
  async getAddress() {
    const addressData = await get(`${endpoints.address}/${this.address}`);
    const { data } = await addressData
    this.setState({
      addressData: data
    });
  }

  componentDidMount(){
    this.getAddress()
  }
  render(){
    const { total_received, total_sent, balance, txs } = this.state.addressData
    console.log(this.state);
    console.log('txs', txs);
    const addressDetails = {
      owner: '', 
      balance, 
      sent: total_sent, 
      received: total_received
    }
    return (
      <div className="container">
        <div className="col">
          <div className="py-4 d-flex flex-row justify-content-between align-items-center">
            <div className="mr-3">
              <IconComponent />
            </div> 
            <SearchAddressInput />
          </div>
          <AddressInfo address={this.address}/>
          <AddressDetails addressDetails={addressDetails}/>
          <div className="my-4">
            <h4>Transactions</h4>
          </div>
          <TransactionsTable transactions={txs}/>
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
