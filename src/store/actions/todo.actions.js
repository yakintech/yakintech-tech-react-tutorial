
export const addToDo = (payload = {}) => {
    return {
        type:"ADD_TODO",
        payload: payload
    }
}

export const deleteToDo = (payload = {}) => {
    return {
        type:"DELETE_TODO",
        payload: payload
    }
}