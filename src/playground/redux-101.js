import { createStore } from "redux";

// Action generators - function that returns action objects


const incrementCount = ({ incremenetBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incremenetBy
})

const decrementCount = ({ decrementBY = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBY
})

const setCount = ({ count } = {}) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET'
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state ot action


const countReducer = (state = { count: 0 }, action) => {

    //onsole.log("This is the action", action);
    switch (action.type) {
        case 'INCREMENT':

            return {
                count: state.count + action.incremenetBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBY
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }

        default:
            return state
    }

};

const store = createStore(countReducer)


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch({
//     type: 'INCREMENT',
//     incremenetBy: 5
// }
// )

store.dispatch(incrementCount({ incremenetBy: 5 }))


store.dispatch(incrementCount())

// store.dispatch({
//     type: 'RESET'
// })

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBY: 10 })
)

store.dispatch(setCount({ count: -100 }))



