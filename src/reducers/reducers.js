import { combineReducers } from 'redux';
import { ADD_TICKET, DEL_TICKET, AVG_VELOCITY } from '../actions/actionTypes';
import Input from '../components/Input';

const initialState = {
    tickets: [<Input key={0} />],
    velocity: {
        averageVelocity: 0
    }
};

function tickets(state = initialState.tickets, action) {
    switch (action.type) {
        case ADD_TICKET:
            return [
                ...state,
                action.ticket
            ];
        case DEL_TICKET:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

function velocity(state = initialState.velocity, action) {
    switch (action.type) {
        case AVG_VELOCITY:
            return Object.assign({}, state, {
                averageVelocity: action.value
            });
        default:
            return state;
    }
}

export default combineReducers({
    tickets,
    velocity
});

export const getTickets = (state) => {
    return state.tickets;
};

export const getAverageVelocity = (state) => {
    return state.velocity.averageVelocity;
};
