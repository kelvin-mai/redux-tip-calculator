import { Action } from 'redux';

export enum ActionTypes {
  BillChange = '[Bill] change',
  PercentageChange = '[Percentage] change',
  SplitIncrement = '[Split] increment',
  SplitDecrement = '[Split] decrement',
  Reset = '[Reset]',
}

export interface BillChangeAction extends Action {
  type: ActionTypes.BillChange;
  payload: string;
}

export interface PercentageChangeAction extends Action {
  type: ActionTypes.PercentageChange;
  payload: string;
}

export interface SplitIncrementAction extends Action {
  type: ActionTypes.SplitIncrement;
}

export interface SplitDecrementAction extends Action {
  type: ActionTypes.SplitDecrement;
}

export interface ResetAction extends Action {
  type: ActionTypes.Reset;
}

export type Actions =
  | BillChangeAction
  | PercentageChangeAction
  | SplitIncrementAction
  | SplitDecrementAction
  | ResetAction;
