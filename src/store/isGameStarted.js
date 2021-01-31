export function toggleGameStarted() {
    return {
        type: "TOGGLE_GAME_STARTED"
    }
}

export default function isGameStartedReducer(state = false, action) {
    switch (action.type) {
        case "TOGGLE_GAME_STARTED":
            return !state;
        default:
            return state;
    }
}