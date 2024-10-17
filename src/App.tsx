import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import { Board } from './pages/Board/Board';
import { ReactPage } from './pages/Main/ReactPage';

function App(): React.ReactElement {
  return (
    <Router basename="/trello">
      <Routes>
        <Route path="/" element={<ReactPage />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </Router>
  );
}

export default App;
