import { Fragment } from 'react';
import { getTickets, getAverageVelocity } from '../reducers/reducers';
import { connect } from 'react-redux';
import Input from './Input';
import { addTicket, delTicket, setAverageVelocity } from '../actions/estimationActions';

const OuterForm = ({ averageVelocity, tickets, dispatch }) => {
    return (
        <Fragment>
            <div>
                <h2>Input</h2>
                <div>
                    {tickets}
                </div>
                <button className="btn btn-primary" onClick={() => dispatch(delTicket(tickets.length - 1))}>-</button>
                <button className="btn btn-primary" onClick={() => dispatch(addTicket(<Input key={tickets.length}/>))}>+</button>
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
