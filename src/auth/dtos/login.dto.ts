import { IsEmail} from "class-validator";
import {IsNotEmpty} from "class-validator/types/decorator/decorators;
import { messagesHelper } from "../helpers/messages.helper";


export class loginDto {
    @IsEmail({}, { messages: messagesHelper.AUTH_LOGIN_NOT_FOUND })
    login: string;

    @IsNotEmpty({ messages: messagesHelper.AUTH_PASSWORD_NOT_FOUND});
    password: string;
}
