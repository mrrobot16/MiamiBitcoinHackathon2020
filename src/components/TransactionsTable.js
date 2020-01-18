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


class TransactionsTableComponent extends React.Component {
  render(){
    const { transactions } = this.props
    return (
      <table>
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
            transactions.map(tx => {
              const Tx = (
                <tr key={tx.hash}>
                  <td>{tx.date}</td>
                  <td>{tx.hash}</td>
                  <td>{tx.from}</td>
                  <td>{tx.to}</td>
                  <td>{tx.value}</td>
                </tr>
              )
              return Tx
            })
          }
        </tbody>
        
      </table>
    )
  }
}

const TRANSACTIONS = [
    {
      date: '01/18/2020',
      hash: 'd0c07b1b24fa93478161658ee05942553788c4e792ee0fbf43b1729f1b32bb60',
      from: '20ijadfyuquGzrYkpadkaskddQBiut8Xss',
      to: '18hmroHs5QgLGzrY93ctQmyChEUQBiut8X',
      value: 0.5
    },
    {
      date: '01/19/2020',
      hash: 'd0c07b1b24fa93478161658ee05942553788c4e792ee0fbf43b1729f1b32bb61',
      from: '20ijadfyuquGzrYkpadkaskddQBiut8Xss',
      to: '18hmroHs5QgLGzrY93ctQmyChEUQBiut8X',
      value: 0.5
    },
    {
      date: '01/19/2020',
      hash: 'd0c07b1b24fa93478161658ee05942553788c4e792ee0fbf43b1729f1b32bb62',
      from: '20ijadfyuquGzrYkpadkaskddQBiut8Xss',
      to: '18hmroHs5QgLGzrY93ctQmyChEUQBiut8X',
      value: -0.1
    },
    {
      date: '01/20/2020',
      hash: 'd0c07b1b24fa93478161658ee05942553788c4e792ee0fbf43b1729f1b32bb63',
      from: '20ijadfyuquGzrYkpadkaskddQBiut8Xss',
      to: '18hmroHs5QgLGzrY93ctQmyChEUQBiut8X',
      value: 0.3
    },
    {
      date: '01/20/2020',
      hash: 'd0c07b1b24fa93478161658ee05942553788c4e792ee0fbf43b1729f1b32bb64',
      from: '20ijadfyuquGzrYkpadkaskddQBiut8Xss',
      to: '18hmroHs5QgLGzrY93ctQmyChEUQBiut8X',
      value: 0.1
    }
  ];

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing,
  transactions: TRANSACTIONS,
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