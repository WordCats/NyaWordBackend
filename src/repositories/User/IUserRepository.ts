import { Category } from "../../entities/Category";
import { User } from "../../entities/User";

export interface IUserResources {
  activationToken: string;
  userId: number;
}

export interface IUserRepository {
  saveAndGetUserResources(userData: User): Promise<IUserResources>;
  userAlreadyExists(userEmail: string): Promise<boolean>;
  userAlreadyActivated(activationToken: string): Promise<boolean>;
  activateUser(activationToken: string): Promise<void>;
  getUserFavoriteCategories(userId: number): Promise<Category[]>;
}
