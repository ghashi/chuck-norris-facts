import * as React from 'react';
import {
  CategoryListItemContentStyled,
  CategoryListItemStyled,
  CategoryListStyled
} from './category-list.style';

interface CategoryListProps {
  categories?: string[];
}

const CategoryList: React.FunctionComponent<CategoryListProps> = props => {
  if (!props.categories) {
    return null;
  }

  return (
    <CategoryListStyled>
      {props.categories.map(category => (
        <CategoryListItemStyled>
          <CategoryListItemContentStyled>
            {category}
          </CategoryListItemContentStyled>
        </CategoryListItemStyled>
      ))}
    </CategoryListStyled>
  );
};

export default CategoryList;
