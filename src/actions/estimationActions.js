import { ADD_TICKET, DEL_TICKET, AVG_VELOCITY } from './actionTypes';

export function addTicket(ticket) {
    return { type: ADD_TICKET, ticket };
}

export function delTicket(index) {
    return { type: DEL_TICKET, index };
}

export function setAverageVelocity(value) {
    return { type: AVG_VELOCITY, value };
}
