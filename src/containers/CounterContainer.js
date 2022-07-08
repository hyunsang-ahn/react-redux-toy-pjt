import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux/es/exports';
import {increse, decrese } from '../modules/counter'

const CounterContainer = ({ number, increse, decrese }) => {
  return <Counter
    number={number}
    onIncrese={increse}
    onDecrese={decrese}
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
    number : state.counter.number,
  }),
  {
    increse,
    decrese
  }
)(CounterContainer)