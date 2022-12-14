import { IUserRepository } from "../../../repositories/User/IUserRepository";

export class ActivateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
  ) {}

  async execute(activationToken: string) {
    const userAlreadyActivated = await this.userRepository.userAlreadyActivated(activationToken);
  
    if (userAlreadyActivated) {
      throw new Error('This user account already activated! :)');
    }

    await this.userRepository.activateUser(activationToken);
  }
}