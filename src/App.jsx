import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import * as types from './store/types/todo'
const App = () => {
  const {todos, loading, error} = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();
  React.useEffect(() =>{
    dispatch({
      type: types.GET_TODO_START,
      payload: 1
    });
    dispatch({
      type: types.GET_TODOS_START
    });
  }, [])
  return (
    <div>
      <h1>Todos</h1>
      {loading ? <h1>Loading ...</h1> : <p>{JSON.stringify(todos)}</p>}
    </div>
  )
}

export default App