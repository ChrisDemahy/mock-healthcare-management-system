import PatientLogin from "./Pages/PatientLogin/PatientLogin";
import DoctorLogin from "./Pages/DoctorLogin/DotorLogin";
import DoctorHome from "./Pages/DoctorHome/DoctorHome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Patients from "./Pages/Patients/Patients";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Home */}
          <Route exact path="/">
            <div>Home</div>
          </Route>

          {/* Patient Home */}
          <Route exact path="/patient">
            <div> patient home</div>
          </Route>

          {/* Patient Login */}
          <Route path="/patient/login">
            <PatientLogin />
          </Route>

          {/* Doctor Home */}
          <Route path="/doctor/home">
            <DoctorHome />
          </Route>

          {/* Doctors All Patients Page */}
          <Route path="/doctor/patients">
            <Patients />
          </Route>

          {/* Doctor Login */}
          <Route path="/doctor/login">
            <DoctorLogin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
