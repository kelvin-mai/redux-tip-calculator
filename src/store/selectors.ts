import { StoreState } from '.';

export type StoreSelector<T> = (state: StoreState) => T;

export const selectBill: StoreSelector<number> = state => state.bill;

export const selectPercentage: StoreSelector<number> = state =>
  state.percentage;

export const selectSplit: StoreSelector<number> = state => state.split;

export const selectTotal: StoreSelector<string> = state => {
  const total = state.bill + state.bill * (state.percentage / 100);
  return total.toFixed(2);
};

export const selectTip: StoreSelector<string> = state => {
  const tip = state.bill * (state.percentage / 100);
  return tip.toFixed(2);
};

export const selectPerPerson: StoreSelector<string> = state => {
  const perPerson =
    (state.bill + state.bill * (state.percentage / 100)) / state.split;
  return perPerson.toFixed(2);
};
