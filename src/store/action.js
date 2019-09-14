// action types
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const PASS_DATA = 'PASS_DATA';

// actions dispatchers

export function incrementCount() {
  return {
    type: INCREMENT_COUNT
  };
}

export function decrementCount() {
  return {
    type: DECREMENT_COUNT
  };
}

export function passData() {
  return {
    type: PASS_DATA,
    payload: 'My Name is Pratap'
  };
}
