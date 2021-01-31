export function fetchModesPending() {
    return {
        type: "FETCH_MODES_PENDING"
    }
}
export function fetchModesSuccess(payload) {
    return {
        type: "FETCH_MODES_SUCCESS",
        payload: payload
    }
}
export function fetchModesError(error) {
    return {
        type: "FETCH_MODES_ERROR",
        error: error
    }
}

export function fetchModes(url) {
    return dispatch => {
        dispatch(fetchModesPending());
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchModesSuccess(res))
            })
            .catch(error => {
                dispatch(fetchModesError(error));
            });
    }
}

const initialState = {
    pending: false,
    data: null,
    error: null
};

export default function fetchModesReducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_MODES_PENDING":
            return {
                ...state,
                pending: true
            };
        case "FETCH_MODES_SUCCESS":
            return {
                ...state,
                pending: false,
                data: action.payload
            };
        case "FETCH_MODES_ERROR":
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}