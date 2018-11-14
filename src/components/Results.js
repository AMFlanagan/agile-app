import { getTotalDays } from '../reducers/reducers';
import { calculateTotalDays } from '../actions/estimationActions';
import { connect } from 'react-redux';

const Results = ({ totalDays, dispatch }) => {
    return (
        <div>
            {/* <button className="btn btn-primary" onClick={() => dispatch(calculateTotalDays())}>Calculate</button> */}
            <p>Total Work Days: {totalDays}</p>
        </div>
    );
}

// const mapStateToProps = state => ({
//     totalDays: getTotalDays(state)
// });

export default connect(
    // mapStateToProps,
)(Results);
