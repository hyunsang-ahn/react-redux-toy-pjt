import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux/es/exports';


const CounterContainer = ({ number, increse, decrese }) => {
  return <Counter
    number={number}
    onIncrese={increse}
    onDecrese={decrese}
  />
}
const mapStateToProps = state => ({
  number: state.counter.number
})
const mapDispatchToProps = dispatch => ({
  //임시함수
  increse: () => {
    console.log('increse')
  },
  decrese: () => {
    console.log('decrese')
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)