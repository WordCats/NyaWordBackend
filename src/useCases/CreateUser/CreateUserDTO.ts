
type CategoryId = number;

export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  favoriteCategories: CategoryId[];
}
