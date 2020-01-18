import React from 'react'
import { Route, Link  } from 'react-router-dom'
import Home from 'containers/home'
import Address from 'containers/address'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/address/1234">Address</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/address/:address" component={Address} />
    </main>
  </div>
)

export default App
