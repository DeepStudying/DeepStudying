import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './global.css'
import { Provider } from 'react-redux'
import {store} from "../src/redux/store"

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
  <Provider store={store}>
    <Home />
  </Provider>
    
  </React.StrictMode>
)
