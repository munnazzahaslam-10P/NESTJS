import { Catch, Logger, HttpException, ExceptionFilter, ArgumentsHost, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    private logger = new Logger(HttpExceptionFilter.name);

    catch(exception: HttpException, host: ArgumentsHost) {
        this.logger.log(HttpExceptionFilter.name);
        // const ctx = host.switchToHttp();
        // const request = ctx.getRequest<Request>();
        // const response = ctx.getResponse<Response>();
        // const status = exception.getStatus()

        // response.status(status).json({
        //     statusCode: status,
        //     timestamp: new Date().toISOString(),
        //     path: request.url,
        // });

        const ctx = host.switchToHttp();
        const res = ctx.getResponse<Response>();
        const status = exception.getStatus();

        res.status(status).json({
            message: 'bad request',
            error: ''
        })
    }

} 