import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../src/App.css"
// import './index.css'
import { CreateContaxt } from './components/CreateContaxt.jsx'
import { Provider } from "react-redux"
import store from './store/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CreateContaxt>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </Provider>
  </CreateContaxt>
)
