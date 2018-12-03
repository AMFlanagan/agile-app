import { getAverageVelocity, getTickets } from '../../reducers/reducers';
import { updateTicket } from '../../actions/estimationActions';
import _ from 'lodash';
import { Fragment } from 'react';
import styles from './TicketInput.scss'

import { connect } from 'react-redux';

const TicketInput = ({ id, tickets, averageVelocity = 0, points, dispatch }) => {
    return (
        <Fragment>
            <style jsx>{styles}</style>
            <form>
                <div className="form-row">
                    <div className="col-5">
                        <input className="form-control" type="text" name="title" placeholder="title"></input>
                    </div>
                    <div className="col">
                        <select name="estimated-size" className="form-control">
                            <option value="xs">XS (0-20)</option>
                            <option value="s">S (21-40)</option>
                            <option value="m">M (41-60)</option>
                            <option value="l">L (61-80)</option>
                            <option value="xl">XL (81-100)</option>
                            <option value="xxl">XXL (101-120)</option>
                        </select>
                    </div>
                    <div className="col">
                        <input className="form-control" onChange={(e) => dispatch(updateTicket(e.target.value, id, averageVelocity))} type="number" name="estimated-points" placeholder="Estimated points"></input>
                    </div>
                    {(points && averageVelocity)
                        ? <div className="col">
                            {tickets[id].days}
                        </div>
                        : <div className="col work-days-error">
                            <small>Points/ Avg velocity missing</small>
                        </div>}
                </div>
            </form>
        </Fragment>
    )
}



const mapStateToProps = state => ({
    tickets: getTickets(state),
    averageVelocity: getAverageVelocity(state)
});

export default connect(
    mapStateToProps,
)(TicketInput);