import { FETCH_SMURF_START, FETCH_SMURF_SUCC, FETCH_SMURF_FAIL, POST_SMURF_SUCC, POST_SMURF_FAIL } from '../actions'

const initialState = {
    smurf: null,
    isFetching: false,
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_SMURF_SUCC:
            return {
                ...state,
                smurf: action.payload,
                isFetching: false,
                error: ""

            };
        case FETCH_SMURF_FAIL:
            return {
                ...state
            };
        case POST_SMURF_SUCC:

            return {
                ...state,
                smurf: [...state.smurfs, { ...action.payload }]
            }
        default:
            return state;
    }
}
export default reducer