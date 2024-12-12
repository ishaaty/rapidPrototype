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
import ResourcesPage from '../Resources/Resources';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route index element ={<Welcome/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignIn/>}/>

          <Route path="/home" element={<Home/>}/>
          <Route path="/competitions" element={<Competitions/>}/>
          <Route path="/fundraisers" element={<Fundraisers/>}/>
          <Route path="/participants" element={<Participants/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="*" element={<NoPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

