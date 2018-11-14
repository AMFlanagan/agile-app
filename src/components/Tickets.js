import Input from './Input';

const Tickets = ({ tickets }) => {
    let ticketArray = tickets.map((ticket) => {
        return (
            <Input
                key={ticket.id}
                id={ticket.id}
                points={ticket.points}
                workDays={ticket.workDays}
            />
        )
    });
    return ticketArray;
}

export default Tickets;



