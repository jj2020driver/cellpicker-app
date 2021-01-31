export function addHoverRecord(coordinates) {
    return {
        type: "ADD_HOVER_RECORD",
        payload: coordinates
    }
};

export default function hoverRecordsReducer(state = [], action) {
    switch (action.type) {
        case "ADD_HOVER_RECORD":
            const lastFive = state.slice(0, 4);
            return [action.payload, ...lastFive];
        default:
            return state;
    }
};