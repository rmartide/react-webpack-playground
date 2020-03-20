const initialState = {
    timesClicked: 0
}

export const reducer = (state = initialState, payload) => {
    switch (payload.type) {
        case 'COUNT':
            return {...state, timesClicked: state.timesClicked + 1}
        default: 
        return state;
    }
}