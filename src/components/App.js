import Estimations from './Estimations';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import estimationApp from '../reducers/reducers';

const store = createStore(estimationApp);

const App = () => (
    <Provider store={store}>
        <Estimations />
    </Provider>
);

export default App;
