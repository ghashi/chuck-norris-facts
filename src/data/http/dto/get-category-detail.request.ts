export const getCategoryDetailApiPath = (category: string) =>
  `jokes/random?category=${category}`;

export interface GetCategoryDetailResponse {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}
