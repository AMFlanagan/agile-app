import { combineReducers } from 'redux';
import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tickets: [{
        id: 0,
        points: 0,
        days: 0
    }],
    velocity: {
        averageVelocity: 0
    },
    results: {
        totalDays: 0,
        coplettionDate: new Date()
    }
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
        case actionTypes.UPDATE_TICKET:
            const totalDays = _.round(action.points / (action.averageVelocity / 10), 2);
            const newState = [...state]
            newState[action.id].points = action.points;
            newState[action.id].days = totalDays;
            return newState;
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

function results(state = initialState.results, action) {
    switch (action.type) {
        case actionTypes.CALCULATE_RESULTS:
            let totalDays = 0;
            action.tickets.forEach(ticket => {
                totalDays += ticket.days
            });
            const startDate = new Date();
            let completionDate = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + totalDays,
                startDate.getHours(),
                startDate.getMinutes(),
                startDate.getSeconds());
            // console.log(completionDate);
            return Object.assign({}, state, {
                totalDays: totalDays,
                completionDate: completionDate
            });
        default:
            return state;
    }
}

export default combineReducers({
    tickets,
    velocity,
    results
});

export const getTickets = (state) => {
    return state.tickets;
};

export const getAverageVelocity = (state) => {
    return state.velocity.averageVelocity;
};

export const getTotalDays = (state) => {
    return state.results.totalDays;
}

export const getCompletionDate = (state) => {
    return state.results.completionDate;
}

