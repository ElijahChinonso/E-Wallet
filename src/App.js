
import './App.css';
import { Route, Routes } from 'react-router-dom'
import SignUp from "./pages/signUp/components/signUp";
import VerifyAccount from "./pages/verifyAccount/components/verifyAcc";
import LogIn from "./pages/logIn/components/logIn";
import OtpInput from "./pages/otpInput/components/otpInput";
import OtpInputAction from "./pages/otpInputAction/components/otpInputAction";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/signUp'} element={<SignUp/>}/>
          <Route path={'/verifyAccount'} element={<VerifyAccount/>}/>
          <Route path={'/logIn'} element={<LogIn/>}/>
          <Route path={'/otpInput'} element={<OtpInput/>}/>
          <Route path={'/otpInputAction'} element={<OtpInputAction/>}/>
      </Routes>

    </div>
  );
}

export default App;
