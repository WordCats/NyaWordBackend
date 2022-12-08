import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/User/IUserRepository";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
  ) {}

  async execute(userData: User) {
    const userExists = await this.userRepository.userAlreadyExists(userData.email);
   
    if (userExists) {
      throw new Error('This user already exists!');
    }

    const activationToken = await this.userRepository.saveAndGetGeneratedActivationToken(userData);
    return activationToken;
  }
}