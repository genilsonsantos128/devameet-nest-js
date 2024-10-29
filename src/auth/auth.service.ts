import { BadRequestException, Injectable } from "@nestjs/common";
import { LoginDto } from "./dtos/login.dto";
import { messagesHelper } from "./helpers/messages.helper";

@Injectable()
export class authService {
    login(dto: LoginDto){
        if(dto.Login !== 'teste@teste.com' || dto.password !== 'teste@123'){
            throw new BadRequestException(messagesHelper.AUTH_PASSWOORD_OR_LOGIN_NOT_FOUND);

        }
        return dto;
    }
}