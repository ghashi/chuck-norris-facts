import * as React from 'react';
import {
  CategoryListItemContentStyled,
  CategoryListItemStyled,
  CategoryListStyled
} from './category-list.style';
import Skeleton from 'react-loading-skeleton';

interface CategoryListProps {
  categories?: string[];
  isLoading?: boolean;
}

const CategoryList: React.FunctionComponent<CategoryListProps> = props => {
  const loadingCategory = '';
  const categories = props.isLoading
    ? Array(10).fill(loadingCategory)
    : props.categories;

  if (!categories) {
    return null;
  }

  return (
    <CategoryListStyled>
      {categories.map((category, index) => (
        <CategoryListItemStyled key={index}>
          <CategoryListItemContentStyled>
            {category || <Skeleton width={90} />}
          </CategoryListItemContentStyled>
        </CategoryListItemStyled>
      ))}
    </CategoryListStyled>
  );
};

export default CategoryList;
