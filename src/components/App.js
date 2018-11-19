import Estimations from './estimation/Estimations';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import estimationApp from '../reducers/reducers';

const store = createStore(estimationApp, typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => (
    <Provider store={store}>
        <Estimations />
    </Provider>
);

export default App;
