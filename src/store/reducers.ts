import { Reducer } from 'redux';
import { StoreState } from '.';
import { Actions, ActionTypes } from './actions';

const initalState: StoreState = {
  bill: 0,
  percentage: 0,
  split: 1,
};

export const rootReducer: Reducer<StoreState, Actions> = (
  state = initalState,
  action,
) => {
  switch (action.type) {
    case ActionTypes.BillChange:
      return {
        ...state,
        bill: Number(action.payload),
      };
    case ActionTypes.PercentageChange:
      return {
        ...state,
        percentage: Number(action.payload),
      };
    case ActionTypes.SplitIncrement:
      return {
        ...state,
        split: state.split + 1,
      };
    case ActionTypes.SplitDecrement:
      const split = state.split - 1;
      return {
        ...state,
        split: split >= 1 ? split : state.split,
      };
    case ActionTypes.Reset:
      return initalState;
    default:
      return state;
  }
};
