import React from 'react'
import ReactDOM from 'react-dom'
import MessageList from './containers/MessageList'

const NewApp = require('./containers/MessageList').default

function renderApp(App) {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp(MessageList)

if (module.hot) {
  module.hot.accept('./containers/MessageList', () => {
    renderApp(NewApp)
  })
}
