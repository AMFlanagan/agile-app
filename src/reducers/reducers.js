import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tickets: [{
        id: 0,
        points: 0,
        totalDays: 0,
    }],
    velocity: {
        averageVelocity: 0
    },
    // calculate: {
    //     totalDays: 0
    // }
};

function tickets(state = initialState.tickets, action) {
    switch (action.type) {
        case actionTypes.ADD_TICKET:
            return [
                ...state,
                action.ticket
            ];
        case actionTypes.DEL_TICKET:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case actionTypes.UPDATE_POINTS:
            const newState = {...state}
            newState[action.id].points = action.value;
        default:
            return state;
    }
}

function velocity(state = initialState.velocity, action) {
    switch (action.type) {
        case actionTypes.AVG_VELOCITY:
            return Object.assign({}, state, {
                averageVelocity: action.value
            });
        default:
            return state;
    }
}

// function calculate(state = initialState.calculate, action) {
//     switch (action.type) {
//         case actionTypes.CALC_TOTAL_DAYS:
//         console.log(initialState);
//         let sum = 0;
//         let totalDays = initialState.tickets.forEach((ticket) => {
//             sum += ticket.points
//         });

//         console.log(state);
//         default:
//             return state;
//     }
// }

export default combineReducers({
    tickets,
    velocity,
    // calculate
});

export const getTickets = (state) => {
    return state.tickets;
};

export const getAverageVelocity = (state) => {
    return state.velocity.averageVelocity;
};

// export const getTotalDays = (state) => {
//     return state.calculate.totalDays;
// };
