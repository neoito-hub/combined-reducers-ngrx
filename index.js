
export function runCombinedReducer(state, action, combinedReducer) {
    // if multiple reducers share the same action,
    // then only the action which comes first in array
    // will be executed and returned. The latter reducer(s)
    // are not executed
    let newState = state;
    for (let reducer of combinedReducer) {
        newState = reducer.apply(null, [state, action]);
        // if the reducer doesn't pass a default state,
        // then proceed with next reducer
        // if the reducer passes a new state,
        // exit the reducer pipeline and return the new state
        if (newState && newState !== state) {
        return newState;
        }
    }
    return newState;
}
