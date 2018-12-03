import { getTotalDays, getCompletionDate, getContingency } from '../../reducers/reducers';
import dateformat from 'dateformat';
import { connect } from 'react-redux';

import styles from './Results.scss';

const Results = ({ totalDays, completionDate, contingency }) => {
    let date = completionDate ? completionDate : null;
    return date && totalDays ? (
            <form className="results-bar">
                <style jsx>{styles}</style>
                <div className="form-row align-items-center">
                    <label className="col-sm-2 col-form-label">Total Days</label>
                    <div className="col-sm-2">
                        {totalDays}
                    </div>
                    <label className="col-sm-2 col-form-label">Estimated Completion Date</label>
                    <div className="col-sm-2">
                        {dateformat(date, "dddd, mmmm dS, yyyy")}
                    </div>
                    <label className="col-sm-2 col-form-label">With Contingency</label>
                    <div className="col-sm-2">
                        {contingency}%
                    </div>
                </div>
            </form>
    ) : null;
}

const mapStateToProps = state => ({
    totalDays: getTotalDays(state),
    completionDate: getCompletionDate(state),
    contingency: getContingency(state)
});

export default connect(
    mapStateToProps,
)(Results);
