import { getAverageVelocity } from '../reducers/reducers';
import { connect } from 'react-redux';

const Input = ({ averageVelocity }) => {
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
                            <input type="number" name="estimated-points" placeholder="Estimated points"></input>
                        </form>
                    </td>
                    <td>Estimated work days {averageVelocity}</td>
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