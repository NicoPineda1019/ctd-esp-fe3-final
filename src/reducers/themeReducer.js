export const themeReducer = (state, action) => {
    switch(action.type ) {
        case "CHANGE_THEME":
            console.log('HOla')
            return {...state, ...action.payload}
        default:
            return state    
    }
}