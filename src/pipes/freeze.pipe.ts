import { Injectable, Logger, PipeTransform } from "@nestjs/common";

@Injectable()
export class FreezePipe implements PipeTransform {
    private logger = new Logger(FreezePipe.name);

    transform(value: any) {
        this.logger.log(FreezePipe.name);
        Object.freeze(value);
    }
}