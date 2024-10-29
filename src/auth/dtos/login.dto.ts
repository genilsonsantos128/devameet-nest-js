import { IsEmail, IsNotEmpty } from 'class-validator';
import { messagesHelper } from '../helpers/messages.helper';

export class LoginDto {
  @IsEmail({}, { message: messagesHelper.AUTH_LOGIN_NOT_FOUND })
  Login: string;

  @IsNotEmpty({ message: messagesHelper.AUTH_PASSWOORD_NOT_FOUND })
  password: string;
}
