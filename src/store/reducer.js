import { INCREMENT_COUNT, DECREMENT_COUNT, PASS_DATA } from './action';

const initialState = {
  count: 0,
  data: ''
};

const CountReducer = (state = initialState, action) => {
  console.log('Sate ', state, 'Action ', action);
  switch (action.type) {
    case INCREMENT_COUNT: {
      return { ...state, count: state.count + 1 };
    }

    case DECREMENT_COUNT: {
      return { ...state, count: state.count - 1 };
    }
    case PASS_DATA: {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default CountReducer;
