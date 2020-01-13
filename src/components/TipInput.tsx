import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBill, selectSplit, selectPercentage } from '../store/selectors';
import { ActionTypes } from '../store/actions';

export const TipInput = () => {
  const bill = useSelector(selectBill);
  const percentage = useSelector(selectPercentage);
  const split = useSelector(selectSplit);

  const dispatch = useDispatch();
  return (
    <div className='border rounded-lg mb-2 w-full p-4 upperccase shadow-lg bg-gray-800 uppercase'>
      <div>
        <div className='text-teal-400'>Bill</div>
        <input
          className='w-full bg-gray-800 text-white text-2xl'
          value={bill}
          onChange={e =>
            dispatch({
              type: ActionTypes.BillChange,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div>
        <div className='text-teal-400'>Tip %</div>
        <input
          className='w-full bg-gray-800 text-white text-2xl'
          value={percentage}
          onChange={e =>
            dispatch({
              type: ActionTypes.PercentageChange,
              payload: e.target.value,
            })
          }
        />
      </div>

      <div>
        <div className='text-center text-white'>Split</div>
        <div className='flex justify-between items-center'>
          <button
            className='w-1/3 bg-teal-400 text-gray-800 text-2xl rounded'
            onClick={() => dispatch({ type: ActionTypes.SplitIncrement })}>
            +
          </button>
          <span className='text-teal-400'>{split}</span>
          <button
            className='w-1/3 bg-teal-400 text-gray-800 text-2xl rounded'
            onClick={() => dispatch({ type: ActionTypes.SplitDecrement })}>
            -
          </button>
        </div>
      </div>
    </div>
  );
};
