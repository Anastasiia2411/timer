import {ADD_LOG, CLEAR_LOG, ADD_PENDING, CLEAR_PENDING,ADD_TO_QUEUE,REMOVE_FROM_QUEUE} from "./types"

export function addLog(log) {
    return { type: ADD_LOG, log };
}

export function clearLog() {
    return { type: CLEAR_LOG };
}

export function addPending(pending) {
    return { type: ADD_PENDING, pending };
}

export function clearPending() {
    return { type: CLEAR_PENDING };
}

export const addToQueue = (seconds) => ({
    type: ADD_TO_QUEUE,
    payload: seconds,
});

export const removeActionFromQueue = () => ({
    type: REMOVE_FROM_QUEUE,
});