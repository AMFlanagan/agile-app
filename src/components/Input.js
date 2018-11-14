import { getAverageVelocity } from '../reducers/reducers';
import { updateTicket } from '../actions/estimationActions';
import { updatePoints } from '../actions/estimationActions';
import _ from 'lodash';

import { connect } from 'react-redux';

const Input = ({ id, averageVelocity, points, dispatch }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <form>
                            <input type="text" name="title" placeholder="title"></input>
                            <select name="shit-size">
                                <option value="xs">XS (0-20)</option>
                                <option value="s">S (21-40)</option>
                                <option value="m">M (41-60)</option>
                                <option value="l">L (61-80)</option>
                                <option value="xl">XL (81-100)</option>
                                <option value="xxl">XXL (101-120)</option>
                            </select>
                            <input onChange={(e) => dispatch(updatePoints(e.target.value, id))} type="number" name="estimated-points" placeholder="Estimated points" ></input>
                        </form>
                    </td>
                    <td>Estimated work days {_.round(points / (averageVelocity/10), 2)}</td>
                </tr>
            </tbody>
        </table>
    )
}



const mapStateToProps = state => ({
    averageVelocity: getAverageVelocity(state)
});

export default connect(
    mapStateToProps,
)(Input);