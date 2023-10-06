import { ADD_LOG, CLEAR_LOG, ADD_PENDING, CLEAR_PENDING, ADD_TO_QUEUE, REMOVE_FROM_QUEUE } from "./types";

const initialState = {
    logs: [],
    pending: null,
    actionQueue: [],
};

export default function logReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_LOG:
            return {
                ...state,
                logs: [...state.logs, action.log],
            };
        case CLEAR_LOG:
            return {
                ...state,
                logs: [],
            };
        case ADD_PENDING:
            return {
                ...state,
                pending: action.pending,
            };
        case CLEAR_PENDING:
            return {
                ...state,
                pending: null,
            };
        case ADD_TO_QUEUE:
            return {
                ...state,
                actionQueue: [...state.actionQueue, action.payload],
            };
        case REMOVE_FROM_QUEUE:
            return {
                ...state,
                actionQueue: state.actionQueue.slice(1),
            };
        default:
            return state;
    }
}
