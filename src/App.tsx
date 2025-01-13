import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { Board } from './pages/Board/Board';
import { Home } from './pages/Home/Home';
import store from './store';

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/:boardId" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
