import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/Mail/IMailProvider";
import { IUserRepository } from "../../repositories/User/IUserRepository";
import jwt from "jsonwebtoken";

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private mailProvider: IMailProvider,
  ) {}

  async execute(userData: User) {
    const userExists = await this.userRepository.userAlreadyExists(userData.email);
   
    if (userExists) {
      throw new Error('This user already exists!');
    }

    const { activationToken, userId } = await this.userRepository.saveAndGetUserResources(userData);

    await this.mailProvider.sendMail({
      from: {
        name: 'Equipe Word Cats',
        email: 'wordcatsnya@gmail.com',
      },
      to: {
        name: userData.name,
        email: userData.email,
      },
      subject: '- Token de ativação de conta -',
      body: `
        <html>
          <head></head>
          <body style="display: flex; flex-direction: column; justify-content: center; align-items: center">
            <h1>Olá ${userData.name}!</h1>
            <h4>Para completar seu cadastro na NyaWord, clicke no link abaixo:</h4>
            <a href="https://www.nyaword.com/ativar-conta/${activationToken}">
              Clique aqui para ativar sua conta!
            </a>
          </body>
        </html>
      `,
    });
    
    const acessToken = jwt.sign({ userId }, process.env.JWT_SECRET!);

    return acessToken;
  }
}