import { getTickets, getAverageVelocity, getContingency } from '../../reducers/reducers';
import { connect } from 'react-redux';
import TicketInputList from './TicketInputList';
import { addTicket, delTicket, setAverageVelocity, calculateResults, setContingency } from '../../actions/estimationActions';

import styles from './OuterForm.scss';

const OuterForm = ({ averageVelocity, tickets, dispatch, contingency }) => {
    return (
        <div className="estimator-wrapper">
            <style jsx>{styles}</style>
            <h3><small className="">Estimation Tool</small></h3>
            <form className="avg-velocity">
                <div className="form-row align-items-center">
                    <label className="col-sm-1.5 col-form-label">Average Cycle Velocity</label>
                    <div className="col-sm-1">
                        <input type="text" className="form-control" onChange={(e) => dispatch(setAverageVelocity(e.target.value))} id="average-cycle-velocity" type="number" name="average-cyle-velocity" />
                    </div>
                    <label className="col-sm-1.5 col-form-label">Average Weekly Velocity</label>
                    <div className="col-sm-1">
                        <input type="text" readOnly className="form-control-plaintext" onChange={(e) => dispatch(setAverageVelocity(e.target.value))} id="average-cycle-velocity" type="number" name="average-cyle-velocity" placeholder={averageVelocity / 2} />
                    </div>
                    <label className="col-sm-1.5 col-form-label">Contingency Rate (%)</label>
                    <div className="col-sm-1">
                        <input type="text" className="form-control" onChange={(e) => dispatch(setContingency(e.target.value))} id="contingency-rate" type="number" name="contingency"/>
                    </div>
                    <label className="col-sm-2 col-form-label">Add/ Remove Tickets</label>
                    <div className="col-sm-0.5" >
                        <div className="btn btn-secondary btn-block" onClick={() => dispatch(delTicket(tickets.length - 1))}>-</div>
                    </div>
                    <div className="col-sm-0.5" >
                        <div className="btn btn-secondary btn-block" onClick={() => dispatch(addTicket({ id: tickets.length, points: 0 }))}>+</div>
                    </div>
                    <div className="col-sm-2">
                        <div onClick={() => dispatch(calculateResults(tickets, contingency))} className="btn btn-primary btn-block">Calculate</div>
                    </div>
                </div>
            </form>
            <div>
                <TicketInputList tickets={tickets} />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    tickets: getTickets(state),
    averageVelocity: getAverageVelocity(state),
    contingency: getContingency(state)
});

export default connect(
    mapStateToProps,
)(OuterForm);

