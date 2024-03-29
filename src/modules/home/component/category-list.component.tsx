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
  const loadingCategory = { to: '', name: '' };
  const categories = props.isLoading
    ? Array(10).fill(loadingCategory)
    : props.categories;

  const [randomCategory, setRandomCategory] = React.useState<
    CategoryListItem
  >();
  React.useEffect(() => {
    if (!categories) {
      return;
    }
    const random = categories[Math.floor(Math.random() * categories.length)];
    setRandomCategory(random);
  }, [categories]);

  if (!categories) {
    return null;
  }

  return (
    <CategoryListStyled>
      {categories.map((category, index) => (
        <CategoryListItemStyled key={index}>
          <Link to={category.to}>
            <CategoryListItemContentStyled>
              {category.name || <Skeleton width={90} />}
            </CategoryListItemContentStyled>
          </Link>
        </CategoryListItemStyled>
      ))}
      {randomCategory && randomCategory.to && (
        <CategoryListItemStyled>
          <Link to={randomCategory.to}>
            <CategoryListItemContentStyled>???</CategoryListItemContentStyled>
          </Link>
        </CategoryListItemStyled>
      )}
    </CategoryListStyled>
  );
};

export default CategoryList;
