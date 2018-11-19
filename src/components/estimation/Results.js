import { getTotalDays } from '../../reducers/reducers';
import { calculateTotalDays } from '../../actions/estimationActions';
import { connect } from 'react-redux';

const Results = ({ totalDays, dispatch }) => {
    return (
        <div>
        results
        </div>
    );
}

// const mapStateToProps = state => ({
//     totalDays: getTotalDays(state)
// });

export default connect(
    // mapStateToProps,
)(Results);
