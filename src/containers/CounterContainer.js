import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux/es/exports';
import { increase, decrease } from '../modules/counter'
import { useSelector, useDispatch } from 'react-redux';
const CounterContainer = () => {
  const number = useSelector(state => state.counter.number)
  console.log('number..............', number)

  const dispatch = useDispatch()
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch])
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch])

  return <Counter
    number={number}
    // onIncrease={() => dispatch(increase())}
    // onDecrease={() => dispatch(decrease())}
    onIncrease={onIncrease}
    onDecrease={onDecrease}
  />
}










// 1번방식
// const mapStateToProps = state => ({
//   number: state.counter.number
// })
// const mapDispatchToProps = dispatch => ({
//   //임시함수
//   increse: () => {
//     dispatch(increse())
//   },
//   decrese: () => {
//     dispatch(decrese())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)


//2번 방식


// export default connect(
//   state => ({
//     number : state.counter.number,
//   }),
//   dispatch => ({
//     increse : () => dispatch(increse()),
//     decrese : () => dispatch(decrese())

//   })
// )(CounterContainer)

//3번방식
export default connect(
  state => ({
    number: state.counter.number,
  }),
  {
    increase,
    decrease
  }
)(CounterContainer)