import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Notes from "./components/Notes";
import TagView from "./components/TagView";
import ArchivedNotes from "./components/ArchivedNotes";
import TrashedNotes from "./components/TrashedNotes";
import ReminderView from "./components/ReminderView";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/archived" component={ArchivedNotes} />
        <ProtectedRoute path="/trashed" component={TrashedNotes} />
        <ProtectedRoute path="/tag/:tag" component={TagView} />
        <ProtectedRoute path="/reminders" component={ReminderView} />
        <ProtectedRoute path="/" component={Notes} />
      </Switch>
    </Router>
  );
}

export default App;
