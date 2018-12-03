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

export function calculateResults(tickets, contingency) {
    return { type: a.CALCULATE_RESULTS, tickets, contingency };
}

export function setContingency(value) {
    return { type: a.SET_CONTINGENCY, value };
}
