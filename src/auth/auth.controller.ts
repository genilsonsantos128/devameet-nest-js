import { Controller, Post,HttpCode,HttpStatus,Body } from "@nestjs/common";
import {AuthService} from "./auth.service";
import { dot } from "node:test/reporters";
import { loginDto } from "./dtos/login.dto";

@Controller("auth")
export class AutoController{
  constructor(private readonly authoService: AuthService){} 

    @Post('login')
    @HttpCode(HttpStatus.OK)
    login(dot:loginDto){
        
    }

}