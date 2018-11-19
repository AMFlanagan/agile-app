import { ADD_TICKET, DEL_TICKET, AVG_VELOCITY, UPDATE_POINTS, CALC_TOTAL_DAYS, UPDATE_TICKET } from './actionTypes';

export function addTicket(ticket) {
    return { type: ADD_TICKET, ticket };
}

export function delTicket(index) {
    return { type: DEL_TICKET, index };
}

export function setAverageVelocity(value) {
    return { type: AVG_VELOCITY, value };
}

export function updatePoints(value, id) {
    console.log('blah');
    return {
        type: UPDATE_POINTS,
        value: value,
        id: id
    };
}

// export function calculateTotalDays() {
//     return { type: CALC_TOTAL_DAYS };
// }
