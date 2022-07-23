import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configurestore';
import HelloWorld from './HelloWorld'
function App() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/hello" element={<HelloWorld />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    )
  }

export default App