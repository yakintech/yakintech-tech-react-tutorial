const todos = (state = [], action) => {

    if(action.type == "ADD_TODO"){
        return [...state, action.todo]

    }
    else if(action.type == "DELETE_TODO"){
        var newTodos = state.filter(q => q.id != action.todo?.id);
        return newTodos
    }
    else if(action.type == "REMOVE_ALL"){
        state = []
        return state;
    }
    else {
        return state
    }
}

export default todos

//ACTION => TYPE, PAYLOAD