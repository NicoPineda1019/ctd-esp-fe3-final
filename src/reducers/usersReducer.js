export const usersReducer = (state, action) => {
    switch(action.type ) {
        case "SET_USERS":
            return {...state, users: [...action.payload]}
        case "SET_FAV_USERS":
            const favUsers = JSON.parse(localStorage.getItem('favorites')) ?? []
            return { ...state, favUsers: [...favUsers]}
        default:
            return state    
    }
}