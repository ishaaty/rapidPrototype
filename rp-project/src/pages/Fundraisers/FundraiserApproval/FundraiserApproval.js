import './FundraiserApproval.css';
import Header from '../../../components/Header/Header'
import Menu from '../../../components/Menu/Menu'
import ParticipantCard from '../../../components/ParticipantCard/ParticipantCard';
import ApprovalButtons from '../../../components/ApprovalButtons/ApprovalButtons';

export default function FundraiserApproval() {

    let userRole = "admin" || false;

    return (
        <>
            <Header />
            <Menu />
            <h1 id="fundheader">Fundraiser Approval</h1>
            <div class="fundapprovals">
                <ParticipantCard name="Isha Tyagi" email="ishtya25@bergen.org" grade="2025" events="Regional Roleplay" />
                <ApprovalButtons />
                <ParticipantCard name="Julia Thompson" email="jultho25@bergen.org" grade="2025" events="Regional Binder" />
                <ApprovalButtons />
                <ParticipantCard name="Ashley Johnson" email="ashjoh25@bergen.org" grade="2025" events="Regional Roleplay" />
                <ApprovalButtons />
            </div>
        </>
    )
}