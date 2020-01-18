import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from 'modules/counter'

class SearchAddressInput extends React.Component {
  state = {
    address: null
  }
  onAddressEnter(key){
    if(key === 'Enter') { 
      const address = this.state.address
      this.props.push(address)
    }
  }
  onAddressInputChange(value){
    this.setState({ address: value })
  }
  render(){
    const onChange = (event) => this.onAddressInputChange(event.target.value)
    const onKeyEnter = (event) => this.onAddressEnter(event.key)
    return (
      <input 
        type="text" 
        onChange={onChange}
        onKeyDown={onKeyEnter}/>
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
      push: (address) => push(`/address/${address}`)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAddressInput)
