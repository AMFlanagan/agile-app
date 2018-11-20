import { getTotalDays, getCompletionDate } from '../../reducers/reducers';
import dateformat from 'dateformat';
import { connect } from 'react-redux';

const Results = ({ totalDays, completionDate }) => {
    let date = completionDate ? completionDate : null;
    return (
        <div>
            <p>Total Days: {totalDays}</p>
            <p>Estimated Completion Date: {date ? dateformat(date, "dddd, mmmm dS, yyyy") : null}</p>
        </div>
    );
}

const mapStateToProps = state => ({
    totalDays: getTotalDays(state),
    completionDate: getCompletionDate(state)
});

export default connect(
    mapStateToProps,
)(Results);
