export const getTodosStart = () =>{
    return {
        type: 'GET_TODOS_START',
    }
}
export const getTodosSucess = (payload) =>{
    return {
        type: 'GET_TODOS_SUCCESS',
        payload
    }
}
export const getTodosFailure = () =>{
    return {
        type: 'GET_TODOS_FAILURE',
    }
}


export const getTodoStart = () =>{
    return {
        type: 'GET_TODO_START'
    }
}
export const getTodoSucess = (payload) =>{
    return {
        type: 'GET_TODO_SUCCESS',
        payload
    }
}
export const getTodoFailure = () =>{
    return {
        type: 'GET_TODO_FAILURE',
    }
}

