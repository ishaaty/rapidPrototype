import './SignIn.css';
import Header from '../../components/Header/Header'

export default function SignIn() {
    return (
        <>
            <Header />
            <h2>Sign In</h2>
            <div class="button-container">
                <button id="signupbtn"><strong>Sign Up</strong></button>
                <button id="loginbtn"><strong>Log In</strong></button>
            </div>
        </>
    )
    // make student button and make admin button
}