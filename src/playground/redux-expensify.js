import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { StrictMode } from 'react';

//  ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description, note, amount, createdAt
    }

})

//  REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//  EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//  SET_TEXT_FILTER

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})



//  SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

//  SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//  SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

//  SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expenses Reducer
const expensesReducerDefaultState = []
const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',// date or amount,
    startDate: undefined,
    endDate: undefined
}

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state, action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })

        default:
            return state
    }
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            console.log('Sorting By Amount');

            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: 125
            }

        case 'SET_END_DATE':
            return {
                ...state,
                startDate: 1250
            }

        default: return state
    }
}

// Get visible Expenses
const getVisisbleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' | expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        };
    })
}

//  Store Creation
const store = createStore(
    combineReducers(
        {
            expenses: expensesReducer,
            filters: filterReducer
        }
    )
)

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisisbleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const ExpenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }))
const ExpenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }))


// store.dispatch(removeExpense({ id: ExpenseOne.expense.id }))
// store.dispatch(editExpense(ExpenseTwo.expense.id, { amount: 500 }))

//store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// // store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))

// const demoState = {
//     expenses: [{
//         id: uuidv4(),
//         description: 'Janurary Rent',
//         note: 'This was the final payment for that address',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBY: 'amount',// date or amount,
//         startDate: undefined,
//         endDate: undefined
//     }
// }

// const user = {
//     name: 'Jen',
//     age: 24
// }

// console.log(
//     {
//         age: 27,
//         ...user,
//         location: 'Philladephia',
//     }
// );

