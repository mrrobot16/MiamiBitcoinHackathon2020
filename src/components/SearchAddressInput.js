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

class SearchAddressInput extends React.Component {
  state = {
    address: null
  }
  onAddressEnter(key) {
    if(key === 'Enter') {
      const address = this.state.address
      this.props.push(address)
    }
  }
  onAddressInputChange(value) {
    this.setState({ address: value })
  }

  render() {
    let styleInput = {
      'border-top-right-radius': '10rem',
      'border-bottom-right-radius': '10rem',
    }
    let styleBefore = {
      'border-top-left-radius': '10rem',
      'border-bottom-left-radius': '10rem',
    }
    const onChange = (event) => this.onAddressInputChange(event.target.value)
    const onKeyEnter = (event) => this.onAddressEnter(event.key)
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span style={styleBefore} className="input-group-text" id="basic-addon1">BTC</span>
        </div>
        <input
          style={styleInput}
          className='w-100 form-control form-control-lg'
          type="text"
          onChange={onChange}
          onKeyDown={onKeyEnter}/>
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
      push: (address) => push(`/address/${address}`)
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAddressInput)
