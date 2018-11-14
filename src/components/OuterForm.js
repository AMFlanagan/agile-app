import { Fragment } from 'react';
import { getTickets, getAverageVelocity } from '../reducers/reducers';
import { connect } from 'react-redux';
import Tickets from './Tickets';
import { addTicket, delTicket, setAverageVelocity } from '../actions/estimationActions';

const OuterForm = ({ averageVelocity, tickets, dispatch }) => {
    return (
        <Fragment>
            <div>
                <h2>Input</h2>
                <Tickets tickets={tickets}/>
                <button className="btn btn-primary" onClick={() => dispatch(delTicket(tickets.length - 1))}>-</button>
                <button className="btn btn-primary" onClick={() => dispatch(addTicket({id: tickets.length, points: 0}))}>+</button>
            </div>
            <div>
                <input onChange={(e) => dispatch(setAverageVelocity(e.target.value))} id="average-cycle-velocity" type="number" name="average-cyle-velocity" placeholder="Average cycle velocity"></input>
                <p>Average Weekly Velocity {averageVelocity / 2}</p>
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => ({
    tickets: getTickets(state),
    averageVelocity: getAverageVelocity(state)
});

export default connect(
    mapStateToProps,
)(OuterForm);
