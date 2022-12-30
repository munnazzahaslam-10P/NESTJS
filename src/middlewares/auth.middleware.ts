import { Injectable, Logger, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { NextFunction } from "express";
import { RequestService } from "src/request.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware{
    private logger = new Logger(AuthMiddleware.name)
    constructor(private readonly requestService: RequestService){}

    private userId='23';
    use(req: Request, res: Response, next: NextFunction) {
        this.logger.log(AuthMiddleware.name);
        const token = req.headers["authorization"].split('Bearer ')[1]
        //authenticate the req here
        if(!token){
            return new UnauthorizedException();
        }

        //attach common data here
        this.requestService.setUserId(this.userId);
        //to execute next piece of code
        next();
    }
}