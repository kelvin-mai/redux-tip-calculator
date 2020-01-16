import { initalState } from '../reducers';
import { StoreState } from '..';
import {
  selectTotal,
  selectTip,
  selectSplit,
  selectPerPerson,
} from '../selectors';

const testState: StoreState = initalState;

describe('selector tests', () => {
  it('should select correct total', () => {
    expect(selectTotal({ ...testState, bill: 100, percentage: 10 })).toEqual(
      '110.00',
    );
  });

  it('should select correct tip', () => {
    expect(selectTip({ ...testState, bill: 100, percentage: 10 })).toEqual(
      '10.00',
    );
  });

  it('should select correct decimal total', () => {
    expect(selectTotal({ ...testState, bill: 89, percentage: 12 })).toEqual(
      '99.68',
    );
  });

  it('should select correct decimal tip', () => {
    expect(selectTip({ ...testState, bill: 89, percentage: 12 })).toEqual(
      '10.68',
    );
  });

  it('should select correct rounded total', () => {
    expect(selectTotal({ ...testState, bill: 89.99, percentage: 25 })).toEqual(
      '112.49',
    );
  });

  it('should select correct rounded tip', () => {
    expect(selectTip({ ...testState, bill: 89.99, percentage: 25 })).toEqual(
      '22.50',
    );
  });

  it('should split evenly', () => {
    expect(selectPerPerson({ bill: 89.99, percentage: 25, split: 3 })).toEqual(
      '37.50',
    );
  });
});
