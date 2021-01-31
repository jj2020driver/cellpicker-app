export function setActiveMode(value) {
    return {
        type: "SET_ACTIVE_MODE",
        payload: value
    }
};

export default function activeModeReducer(state = "", action) {
    switch (action.type) {
        case "SET_ACTIVE_MODE":
            return action.payload;
        default:
            return state;
    }
}