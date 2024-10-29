import { Controller, Post,HttpCode,HttpStatus,Body } from "@nestjs/common";
import {authService} from "./auth.service";
import { dot } from "node:test/reporters";
import { LoginDto } from "./dtos/login.dto";

@Controller("auth")
export class AuthController{
  constructor(private readonly authoService: authService){} 

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(@Body() dot:LoginDto){
        return this.authoService.login(dot);
    }

}