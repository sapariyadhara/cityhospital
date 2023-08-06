
import * as ActionType from '../ActionTypes'

const initstate = {
    count: 0
}

export const counterReducer = (state = initstate, action) => {
    switch (action.type) {
        case ActionType.INCREMENT_COUNTER:
            return {
                count: state.count + 1
            }

        case ActionType.DECREMENT_COUNTER:
            return {
                count: state.count - 1
            }

        case ActionType.INCREMENT_IF_ODD:
            return {
                count: (state.count % 2!== 0)? state.count + 1 : state
            }

        default:
            return state
    };
}