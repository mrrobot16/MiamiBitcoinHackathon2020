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
import { SearchAddressInput, IconComponent } from 'components'
class Home extends React.Component {
  render(){
    return(
      <div className={ 'container' }>
        <div className="row justify-content-center vh-100">
          <div className="col col-lg-8">
            <div className="d-flex flex-column align-items-center justify-content-center" style={ { "height": '80%' } }>
              <IconComponent style={ { width: "25%" }} />
              <SearchAddressInput />
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
)(Home)
