import { Reducer, Action } from 'redux';
import { StoreState } from '.';

const initalState: StoreState = {
  bill: 0,
  percentage: 0,
  split: 1,
};

export const rootReducer: Reducer<StoreState, Action> = (
  state = initalState,
  action,
) => state;
