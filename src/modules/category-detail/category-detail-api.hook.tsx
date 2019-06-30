import * as React from 'react';
import {
  useDataApi,
  UseDataState
} from '../../atomic/obj.hooks/data-api.hooks';
import {
  getCategoryDetailApiPath,
  GetCategoryDetailResponse
} from '../../data/http/dto/get-category-detail.request';

export function useCategoryDetailAPI(
  name: string
): [UseDataState<GetCategoryDetailResponse>, () => void] {
  const [response, , refetch] = useDataApi<GetCategoryDetailResponse>(
    getCategoryDetailApiPath(name)
  );
  const currentId = String(response.data && response.data.id);

  /** re-fetch if next response is the same as the last one */
  const lastResponseId = React.useRef<string>();
  const handleReload = React.useCallback(() => {
    lastResponseId.current = currentId;
    refetch();
  }, [currentId, refetch]);
  if (
    !response.isError &&
    !response.isLoading &&
    lastResponseId.current === currentId
  ) {
    refetch();
  }

  return [response, handleReload];
}
