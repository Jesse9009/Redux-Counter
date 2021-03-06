import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
};

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
const counter = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case INCREMENT:
      // Fill in the body of this case
      return { count: state.count + 1 };
    case DECREMENT:
      // Fill in the body of this case
      return { count: state.count - 1 };
    case 'INCREMENT_ODD':
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default counter;
