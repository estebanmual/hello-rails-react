import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HelloWorld from './HelloWorld'
class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/hello" element={<HelloWorld greeting="Hello from App Component" />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    )
  }
}

export default App