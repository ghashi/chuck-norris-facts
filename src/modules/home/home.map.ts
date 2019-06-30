import { getCategoryDetailUrlPath } from '../category-detail/category-detail.lazy';
import { CategoryListItem } from './component/category-list.component';

export const mapToCategoryListItem = (category: string) =>
  ({
    name: category,
    to: getCategoryDetailUrlPath(category)
  } as CategoryListItem);
