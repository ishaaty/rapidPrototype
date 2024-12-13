import './StudentProfile.css';
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

export default function StudentProfile() {
    return (
        <>

            <Header />

            <h1 className="header-text">Student Profile (Roleplays)</h1>

            <button>
                <h1>To Do List</h1>
                <h2>NJ DECA Form</h2>
                <h2>Script</h2>
            </button>

            <button>
                <h1>Add Comment</h1>
                <button></button>
                <button>Submit</button>
            </button>

                
        </>
    )
}