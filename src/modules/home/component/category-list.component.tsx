import * as React from 'react';
import {
  CategoryListItemContentStyled,
  CategoryListItemStyled,
  CategoryListStyled
} from './category-list.style';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

export interface CategoryListItem {
  name: string;
  to: string;
}
export interface CategoryListProps {
  categories?: CategoryListItem[];
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
        <Link to={category.to} key={index}>
          <CategoryListItemStyled>
            <CategoryListItemContentStyled>
              {category ? category.name : <Skeleton width={90} />}
            </CategoryListItemContentStyled>
          </CategoryListItemStyled>
        </Link>
      ))}
    </CategoryListStyled>
  );
};

export default CategoryList;
