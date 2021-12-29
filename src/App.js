import { useEffect, useState } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Jobs from "./components/Jobs/Jobs.jsx";
import "./app.scss";
function App() {
  const [job_board, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/job_boards`)
      .then((resp) => resp.json())
      .then((job_board_list) => setJobs(job_board_list));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/:job_board/jobs">
          <Jobs />
        </Route>
        <Route exact path="/">
          <Home job_board_list={job_board} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
