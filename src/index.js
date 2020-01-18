import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import store, { history } from './redux/store'
import App from 'containers/app'

import './index.css'

const target = document.querySelector('#root')
const ProviderApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>
)
render(<ProviderApp/>, target)
