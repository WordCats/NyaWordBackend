import { User } from "../../entities/User";

export type ActivationToken = string;

export interface IUserRepository {
  saveAndGetGeneratedActivationToken(userData: User): Promise<ActivationToken>;
  userAlreadyExists(userEmail: string): Promise<boolean>;
}
