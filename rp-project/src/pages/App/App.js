import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// pre sign-in & general pages
import Welcome from "../Welcome/Welcome"
import About from "../About/About"
import Contact from "../Contact/Contact"
import SignIn from "../SignIn/SignIn"
import NoPage from "../NoPage/NoPage"

// post sign-in pages
import Home from "../Home/Home"
import Competitions from "../Competitions/Competitions"
import Fundraisers from "../Fundraisers/Fundraisers"
import Participants from "../Participants/Participants"
import Resources from "../Resources/Resources"
import FundraiserApproval from "../Fundraisers/FundraiserApproval/FundraiserApproval"
import ViewAddEvents from '../ViewAddEvents/ViewAddEvents';
import ViewRequesters from '../ViewRequesters/ViewRequesters';
import Roommates from '../Roommates/Roommates';
import StudentProfile from '../StudentProfile/StudentProfile';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route index element ={<SignIn/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignIn/>}/>

          <Route path="/home" element={<Home/>}/>
          <Route path="/competitions" element={<Competitions/>}/>
          <Route path="/fundraisers" element={<Fundraisers/>}/>
          <Route path="/participants" element={<Participants/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/fundraiserapproval" element={<FundraiserApproval/>}/>
          <Route path="/viewaddevents" element={<ViewAddEvents/>}/>
          <Route path="/viewrequesters" element={<ViewRequesters/>}/>
          <Route path="/roommates" element={<Roommates/>}/>
          <Route path="/studentprofile" element={<StudentProfile/>}/>

          <Route path="*" element={<NoPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

