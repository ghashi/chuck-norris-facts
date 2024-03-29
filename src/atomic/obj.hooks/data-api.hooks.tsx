import axios from 'axios';
import { useEffect, useReducer, useState, useCallback } from 'react';
import { REACT_APP_BASE_URL } from '../..';

export interface UseDataState<D> {
  isLoading: boolean;
  isError: boolean;
  data?: D;
}

interface UseDataActions<D> {
  type: 'FETCH_INIT' | 'FETCH_SUCCESS' | 'FETCH_FAILURE' | 'FETCH_REINIT';
  payload?: D;
}

type UseDataReducer<D> = (
  state: UseDataState<D>,
  action: UseDataActions<D>
) => UseDataState<D>;

export function useDataApi<D>(
  initialUrl: string,
  initialData?: D
): [UseDataState<D>, React.Dispatch<React.SetStateAction<string>>, () => void] {
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer<UseDataReducer<D>>(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  });

  const [refetchTimestamp, setRefetchTimestamp] = useState(Date.now());
  const refetch = useCallback(() => {
    setRefetchTimestamp(Date.now());
    dispatch({ type: 'FETCH_REINIT' });
  }, []);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await axios(`${REACT_APP_BASE_URL}/${url}`);

        if (!didCancel) {
          dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: 'FETCH_FAILURE' });
        }
      }
    };

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [url, refetchTimestamp]);

  return [state, setUrl, refetch];
}

function dataFetchReducer<D>(
  state: UseDataState<D>,
  action: UseDataActions<D>
): UseDataState<D> {
  switch (action.type) {
    case 'FETCH_REINIT':
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      throw new Error();
  }
}
