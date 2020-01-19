import React                  from 'react'
import { push }               from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect }            from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
}                             from 'redux/counter'
import { TRANSACTIONS }       from 'constants/data';
import { truncate }           from 'lodash/string'

class TransactionsTableComponent extends React.Component {
  render(){
    const { transactions } = this.props
    console.log('this.props', this.props);
    console.log('transactions', transactions);
    return (
      <table className="table table-dark table-borderless table-striped table-responsive bg-dark">
        <thead>
          <tr>
            <th>Date</th>
            <th>Hash</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions ? transactions.map(tx => {
              const txDate = new Date(tx.confirmed).toLocaleDateString()
              const Tx = (
                <tr key={tx.hash}>
                  <td>{ txDate }</td>
                  <td width="30%">
                    <span className="text-truncate col-2">
                      { truncate(tx.hash, { length: 24}) }
                    </span>
                  </td>
                  <td>{truncate(tx.addresses[0], { length: 15})}</td>
                  <td>
                    <strong>{truncate(tx.outputs[0].addresses[0], { length: 15 })}</strong>
                  </td>
                  <td>{tx.total}</td>
                </tr>
              )
              return Tx
          }) : null
          }
        </tbody>

      </table>
    )
  }
}

// const TRANSACTIONS = [
//     {
//       date: '01/18/2020',
//       hash: 'd0c07b1b24fa93478161658ee05942553788c4e792ee0fbf43b1729f1b32bb60',
//       from: '20ijadfyuquGzrYkpadkaskddQBiut8Xss',
//       to: '18hmroHs5QgLGzrY93ctQmyChEUQBiut8X',
//       value: 0.5
//     },
//     {
//       date: '01/19/2020',
//       hash: 'd0c07b1b24fa93478161658ee05942553788c4e792ee0fbf43b1729f1b32bb61',
//       from: '20ijadfyuquGzrYkpadkaskddQBiut8Xss',
//       to: '18hmroHs5QgLGzrY93ctQmyChEUQBiut8X',
//       value: 0.5
//     },
//     {
//       date: '01/19/2020',
//       hash: 'd0c07b1b24fa93478161658ee05942553788c4e792ee0fbf43b1729f1b32bb62',
//       from: '20ijadfyuquGzrYkpadkaskddQBiut8Xss',
//       to: '18hmroHs5QgLGzrY93ctQmyChEUQBiut8X',
//       value: -0.1
//     },
//     {
//       date: '01/20/2020',
//       hash: 'd0c07b1b24fa93478161658ee05942553788c4e792ee0fbf43b1729f1b32bb63',
//       from: '20ijadfyuquGzrYkpadkaskddQBiut8Xss',
//       to: '18hmroHs5QgLGzrY93ctQmyChEUQBiut8X',
//       value: 0.3
//     },
//     {
//       date: '01/20/2020',
//       hash: 'd0c07b1b24fa93478161658ee05942553788c4e792ee0fbf43b1729f1b32bb64',
//       from: '20ijadfyuquGzrYkpadkaskddQBiut8Xss',
//       to: '18hmroHs5QgLGzrY93ctQmyChEUQBiut8X',
//       value: 0.1
//     }
//   ];

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  // transactions: TRANSACTIONS,
})

const bindedActions = {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us')
}
const mapDispatchToProps = dispatch => bindActionCreators(bindedActions, dispatch)
const TransactionsTable = connect(mapStateToProps, mapDispatchToProps)(TransactionsTableComponent)

export default TransactionsTable;
