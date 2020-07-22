import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from "./components/Login";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Login/>
      </React.Fragment>
    </Provider>
  )
}

export default App;
