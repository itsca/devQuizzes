import React from 'react';
import {
  Link
} from "react-router-dom";
import './Main.scss';

function App() {
  return (
    <header className="App-header">
      <p>
        Welcome to Dev Quizzes
      </p>
      <Link to="/quiz">
        Start Quiz
      </Link>
    </header>
  );
}

export default App;
