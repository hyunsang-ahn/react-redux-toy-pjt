import { createAction, handleActions } from "redux-actions";

const INCREASE = 'counter/INCRESE';
const DECREASE = 'counter/DECRESE'


// export const increse = () => ({ type: INCRESE })
// export const decrese = () => ({ type: DECRESE })
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)
const initialState = {
  number: 0
}


// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCRESE:
//       return {
//         number: state.number + 1
//       }
//     case DECRESE:
//       return {
//         number: state.number - 1
//       }
//     default:
//       return state;
//   }
// }


const counter = handleActions(
  {

    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 })

  },
  initialState)


export default counter