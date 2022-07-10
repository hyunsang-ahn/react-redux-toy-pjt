import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import todos, {
  changeInput,
  insert,
  toggle,
  remove
} from '../modules/todos'
import Todos from '../components/Todos'
import { useSelector, useDispatch } from 'react-redux';
import useActions from '../lib/useAction';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }))
  const dispatch = useDispatch()
  // const onChangeInput = useCallback((input) => (dispatch(changeInput(input))), [dispatch])
  // const onInsert = useCallback((text) => (dispatch(insert(text))), [dispatch])
  // const onToggle = useCallback((id) => (dispatch(toggle(input))), [dispatch])
  // const onRemove = useCallback((id) => (dispatch(remove(input))), [dispatch])
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions([changeInput, insert, toggle, remove], [])
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}


    />
  )



}
// export default connect(
//   //비구조화 할당
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove
//   }
// )(TodosContainer)



//use selector를 사용하는 경우에, 최적화 작업이 자동으로 이루어지지 않는다.
//그 때문에 성능 최적화를 위해서 react memo를 사용해준다.
//
export default React.memo(TodosContainer)