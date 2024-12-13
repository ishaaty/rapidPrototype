import './SignIn.css';
import Header from '../../components/Header/Header'

export default function SignIn() {
    return (
        <>
            <Header />
            <div>
                <img src="decaLogo.png" alt="decaLogoNotWorking"></img>
            </div>
            <div class="button-container">
                {/* <button id="signupbtn"><strong>Admin</strong></button>
                <button id="loginbtn"><strong>Participant</strong></button> */}
                <a href="home" id="signupbtn"><strong>Admin</strong></a>
                <a href="home" id="loginbtn"><strong>Participant</strong></a>
            </div>
        </>
    )
}