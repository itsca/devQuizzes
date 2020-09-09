import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Main from './Components/main/Main'
import Quiz from './Components/quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/quiz">
            <Quiz/>
          </Route>
          <Route path="/">
            <Main />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
