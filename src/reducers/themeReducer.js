export const themeReducer = (state, action) => {
    switch(action.type ) {
        case "CHANGE_THEME":
            return {...state, ...action.payload}
        default:
            return state    
    }
}