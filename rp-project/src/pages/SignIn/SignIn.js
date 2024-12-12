import './SignIn.css';
import Header from '../../components/Header/Header'

export default function SignIn() {
    return (
        <>
            <Header />
            <h2>Sign In</h2>
            <div>
                <img src="decaLogo.png" alt="decaLogoNotWorking"></img>
            </div>
            <div class="button-container">
                <button id="signupbtn"><strong>Admin</strong></button>
                <button id="loginbtn"><strong>Participant</strong></button>
            </div>
        </>
    )
    // make student button and make admin button
}