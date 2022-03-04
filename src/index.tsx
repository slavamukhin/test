import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NiceModal from '@ebay/nice-modal-react'
import { App } from './App'

ReactDOM.render(
  <BrowserRouter>
    <NiceModal.Provider>
      <App />
    </NiceModal.Provider>
  </BrowserRouter>,
  document.querySelector('#root')
)
