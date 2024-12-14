import './Fundraisers.css';
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import FundraiserCard from '../../components/FundraiserCard/FundraiserCard'

export default function Fundraisers(props) {

    const userRole = "admin";

    const renderAdminContent = () => {
        if (userRole === 'admin' || true) {
            return (
                <>
                    <div class="createfund">
                        <h2 id="createhead">Add Event</h2>
                        <div class="fundentries">
                            <input type="text" id="newfundname" placeholder="Add Name..."></input>
                            <input type="text" id="newfunddesc" placeholder="Add Description...">
                            </input><input type="text" id="newfunddate" placeholder="Add Date..."></input>
                            <input type="text" id="newfundtime" placeholder="Add Time..."></input>
                            <div class="fundsubmit">
                                <button id="fundsubmit">Submit</button>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        return null; // Return nothing if not admin
    };

    return (
        <>
            <Header />
            <Menu />
            <h1 id="fundheader">Fundraisers</h1>
            <div class="funds">
                <FundraiserCard userRole={props.userRole || "admin"} name="Back to School Night" desc="Students will run a table at Back to School Night selling BCA merch." date="September 20, 2025" time="6:00pm to 8:00pm" backgroundColor="#F5585E" />
                <FundraiserCard userRole={props.userRole || "admin"} name="Induction Ceremnoy" desc="While parents are entering the building, students will run a table with refreshments." date="September 20, 2025" time="6:00pm to 8:00pm" backgroundColor="#FFC511" />
                <FundraiserCard userRole={props.userRole || "admin"} name="Bake Sale" desc="There will be a table by the lower lot with food to sell as students leave the building." date="October 5, 2025" time="3:30pm to 4:30pm" backgroundColor="#00984D" />
            </div>
            {renderAdminContent()}
        </>
    )
}