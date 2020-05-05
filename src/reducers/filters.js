const filterReducerDefaultState = {
    text: '',
    sortBy: 'amount',// date or amount,
    startDate: undefined,
    endDate: undefined
}

export default (state = filterReducerDefaultState, action) => {
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