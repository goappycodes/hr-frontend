import {containers} from 'react-bootstrap'
import logo from './logo.svg';
// import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom' 
import HrLogin from './screens/HrLogin.js';
import EmployeeLogin from './screens/EmployeeLogin';
import Register from './screens/Register';
import Verification from './screens/Verification';
import HrProtect from './screens/HrProtect';
import HrDashboard from './screens/HrDashboard';
import InviteEmployee from './screens/InviteEmployee';
function App() {
  return (
    <Router>
      <Route path='/' component={EmployeeLogin} exact></Route>
      <Route path='/hr-login' component={HrLogin} exact></Route>
      <Route path='/register' component={Register} exact></Route>
      <Route path='/identity-verification' component={Verification} exact></Route>
      <Route path='/hr-dashBoard'> <HrProtect Show={HrDashboard}/></Route>
      <Route path='/invite-employee'> <HrProtect Show={InviteEmployee}/></Route>
    </Router>
  );
}

export default App;
