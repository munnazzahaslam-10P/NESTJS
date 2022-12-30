import { DynamicModule, Global, Module, OnModuleInit } from "@nestjs/common";
import { AccountsController } from "./controllers/accounts.controller";
import { UsersController } from "./controllers/users.controller";
import { AccountsService } from "./services/accounts.service";
import { UsersService } from "./services/users.service";

@Module({
    controllers: [UsersController, AccountsController],
    providers: [UsersService, AccountsService],
    imports: []
})
export class UsersModule implements OnModuleInit{
    static register(options: Record<string, string>): DynamicModule {
        return {
            module: UsersModule,
            providers: [{
                provide: 'CONFIG_OPTIONS',
                useValue: options
            }],
          };
    }
    // static forRoot(options: any): DynamicModule {
    //     return {
    //         module: UsersModule,
    //         providers: [{
    //             provide: 'CONFIG_OPTIONS',
    //             useValue: options
    //         }],
    //       };
    // }
    // static forFeature(moduleName: string): DynamicModule {
    //     return {
    //         module: UsersModule,
    //         providers: [{
    //             provide: 'MODULE_NAME',
    //             useValue: moduleName
    //         }],
    //       };
    // }
    onModuleInit() {
        console.log('initialized');
    }
}