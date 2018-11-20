// import { ADD_TICKET, DEL_TICKET, AVG_VELOCITY, UPDATE_TICKET, CALC_TOTAL_DAYS, UPDATE_TICKET } from './actionTypes';
import * as a from './actionTypes';

export function addTicket(ticket) {
    return { type: a.ADD_TICKET, ticket };
}

export function delTicket(index) {
    return { type: a.DEL_TICKET, index };
}

export function setAverageVelocity(value) {
    return { type: a.AVG_VELOCITY, value };
}

export function updateTicket(points, id, averageVelocity) {
    return {
        type: a.UPDATE_TICKET,
        points: points,
        id: id,
        averageVelocity: averageVelocity
    };
}

export function calculateResults(tickets) {
    return { type: a.CALCULATE_RESULTS, tickets };
}
