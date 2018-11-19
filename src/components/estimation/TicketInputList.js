import TicketInput from './TicketInput';
import styles from './TicketInputList.scss';

const TicketInputList = ({ tickets }) => {
    let ticketArray = tickets.map((ticket) => {
        return <TicketInput
            key={ticket.id}
            id={ticket.id}
            points={ticket.points}
            workDays={ticket.workDays}
        />
    });
    return (
            <div className="ticket-input-list-wrapper">
                <style jsx>{styles}</style>
                <form>
                    <div className="form-row">
                        <div className="col-5">
                            Ticket Title (opt. link)
                        </div>
                        <div className="col">
                            Shirt Size
                        </div>
                        <div className="col">
                            Estimated Points
                        </div>
                        <div className="col">
                            Estimated Working Days
                        </div>
                    </div>
                </form>
                {ticketArray}
            </div>
    );
}

export default TicketInputList;
